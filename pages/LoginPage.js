class LoginPage
{
    constructor(page)
    {
        this.page =page;
        this.usernameInput = page.getByLabel('username');
        this.passwordInput = page.getByLabel('password');
        this.loginButton = page.getByRole('button', { name: 'submit' });
    }

    async login(username, password) 
    {
        console.log("USERNAME =>", username);
        console.log("PASSWORD =>", password);
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}

module.exports = LoginPage;
