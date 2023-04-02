const { userModel } = require("../../../DB/models/user.models");


const getAllUsers = async (req, res) => {

    const users = await userModel.find({})
     return res.json({ message: "success", users })

}
const getUser = async (req, res) => {
    const { id } = req.params;
    const user = await userModel.find({ _id: id })
    return  res.json({ message: "success", user })

}

const update = async (req, res) => {
    const { id } = req.params;
    const { email } = req.body;
    const user = await userModel.findOneAndUpdate({ _id: id }, { email }, { new: true })
    return  res.json({ message: "success", user })
}

const deleteuser = async (req, res) => {
    const { id } = req.params;
    const user = await userModel.findOneAndDelete({ _id: id })
    return  res.json({ message: "success", user })
}
const stats = async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
    try {
        const data = await userModel.aggregate([
            { $match: { createdAt: { $gte: lastYear } } },
            { $project: { month: { $month: "$createdAt" } } },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 },
                }
            }
        ])
        return     res.status(500).json({ message: "success", data })

    } catch (error) {

        return    res.status(500).json({ message: "catch", error })
    }
}

const newestUsers = async (req, res) => {

    try {
        const newestUsers = await userModel.find({}).sort({ createdAt: -1 }).limit(10); //  يعني الاجدد -1 تنازلي
        return res.json(newestUsers);
    } catch (err) {
        console.error(err.message);
        return res.status(500).json('Server Error' , err);
    }
}
module.exports = { getAllUsers, update, deleteuser, getUser, stats , newestUsers }
