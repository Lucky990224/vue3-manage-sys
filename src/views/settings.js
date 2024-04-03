const base_url = "";

class AppSettings {
    constructor() {
        this.login_url = base_url + "/login";
        // this.user_url = auth_base_url + "/authorization/api/user";
        // this.role_url = auth_base_url + "/authorization/api/role";
    }
}

const app_settings = new AppSettings();
export default app_settings;
