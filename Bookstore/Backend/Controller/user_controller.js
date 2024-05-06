import User from "./user_controller.js"

export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body
        const user = User.findOne({ email })

        if (user) {
            res.status(400).json({ message: "user Already Exists" })
        }


    } catch (error) {
        res.status(400).json(error)
    }

}