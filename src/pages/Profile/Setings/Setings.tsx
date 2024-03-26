import { Select } from "@mui/material"


export default function SettingsComponent() {
    return (
        <section>
            <div>
                <h1>Appearance</h1>
                <p>Customize how your theme looks on your device</p>
                <select id="languageSelect">
                    <option value="Light">Light</option>
                    <option value="Black">Black</option>
                </select>
                <hr />
            </div>

            <div>
                <h1>Language</h1>
                <p>Select your language</p>
                <select id="languageSelect">
                    <option value="portuguese">Português</option>
                    <option value="english">English</option>
                    <option value="spanish">Español</option>
                </select>
                <hr />
            </div>
            
            <div>
                <h1>Two-factor Authentication</h1>
                <p>Keep your account secure by enabling 2FA via mail</p>
                <hr />
            </div>
            
            <div>
                <h1>Push Notifications</h1>
                <p>Receive push notification</p>
                <hr />
            </div>
            
            <div>
                <h1>Desktop Notification</h1>
                <p>Receive push nofication in desktop</p>
                <hr />
            </div>
            
            <div>
                <h1>Email Notifications</h1>
                <p>Receive email notification</p>
                <hr />
            </div>
          
        </section>
    )
}