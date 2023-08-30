import User from "../Models/User.js"
import Main from "../main.js"

export default class UsersController {
    static pertanyaan() {
        rl.question('username :', async(answer) => {
            try {
                const data = await User.searchUser(answer)
                Main.menu()
            } catch (err) {
                console.log(`username tidak terdaftar`)
                UsersController.pertanyaan()
            }
        })

        rl.question('password :', async(answer2) => {
            try {
                const data = await User.searchPass(answer2)
                Main.menu()
            } catch (err) {
                console.log(`username tidak terdaftar`)
                UsersController.pertanyaan()
            }
        })
    }
}