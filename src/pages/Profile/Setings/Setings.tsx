import { createTheme, Switch, ThemeProvider } from "@mui/material"

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(35, 202, 77)',
    },
  },
  components: {
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 52,
          height: 26,
          padding: 0,
          margin: 8,
        },
        switchBase: {
          padding: 1,
          '&.Mui-checked': {
            transform: 'translateX(26px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
              backgroundColor: 'rgb(52, 299, 89)',
            },
          },
        },
        thumb: {
          width: 24,
          height: 24,
        },
        track: {
          borderRadius: 26 / 2,
          backgroundColor: '#1b191999',
          opacity: 1,
        },
      },
    },
  },
});

  
export default function SettingsComponent() {
  return (
      <ThemeProvider theme={theme}>
          <section className="mt-[-5rem]">

          <div className="p-2 flex items-center justify-between">
            <div>
                <h1 className="text-2xl font-bold mb-2 whitespace-nowrap">Aparence</h1>
                <p className="text-2xl mb-1 whitespace-nowrap opacity-50">Customize how your looks device</p>            
            </div>
            <div className="flex justify-end w-full mr-[10rem] ">
            <select id="languageSelect" className="p-1 border rounded" style={{ backgroundColor: 'rgb(246, 246, 246)' }}>
                  <option value="portuguese" className="bg-white">Dark</option>
                  <option value="english" className="bg-white">Of Course</option>
              </select>
            </div>
          </div>

          <hr className="mr-[10rem]" />

          <div className="p-4 flex items-center justify-between">
            <div>
                <h1 className="text-2xl font-bold mb-2 whitespace-nowrap">Language</h1>
                <p className="text-2xl mb-2 whitespace-nowrap opacity-50">Select your language</p>
            </div>
            <div className="flex justify-end w-full mr-[10rem]">
              <select id="languageSelect" className="p-1 border rounded" style={{ backgroundColor: 'rgb(246, 246, 246)' }}>
                  <option value="portuguese" className="bg-white">Portuguese</option>
                  <option value="english" className="bg-white">English</option>
                  <option value="spanish" className="bg-white">Español</option>
              </select>
            </div>
          </div>
              
            <hr className="mr-[10rem]" />

          <div className="p-4 flex items-center justify-between">
            <div>
                <h1 className="text-2xl font-bold mb-2 whitespace-nowrap">Two-factor Authentication</h1>
                <p className="text-2xl mb-2 whitespace-nowrap opacity-50">Keep your account secure by enabling 2FA via mail</p>
            </div>
            <div className="flex justify-end w-full mr-[10rem]">
                <Switch color="primary" />
            </div>
          </div>

          <hr className="mr-[10rem]" />

          <div className="p-4 flex items-center justify-between">
            <div>
                <h1 className="text-2xl font-bold mb-2 whitespace-nowrap">Push Notifications</h1>
                <p className="text-2xl mb-2 whitespace-nowrap opacity-50">Receive push notification</p>
            </div>
            <div className="flex justify-end w-full mr-[10rem]">
                <Switch color="primary" />
            </div>
          </div>

          <hr className="mr-[10rem]" />

          <div className="p-4 flex items-center justify-between">
            <div>
                <h1 className="text-2xl font-bold mb-2 whitespace-nowrap">Desktop Notification</h1>
                <p className="text-2xl mb-2 whitespace-nowrap opacity-50">Receive push nofication in desktop</p>
            </div>
            <div className="flex justify-end w-full mr-[10rem]">
                <Switch color="primary" />
            </div>
          </div>

          <hr className="mr-[10rem]" />

          <div className="p-4 flex items-center justify-between">
            <div>
                <h1 className="text-2xl font-bold mb-2 whitespace-nowrap">Email Notifications</h1>
                <p className="text-2xl mb-2 whitespace-nowrap opacity-50">Receive email notification</p>
            </div>
            <div className="flex justify-end w-full mr-[10rem]">
                <Switch color="primary" />
            </div>
          </div>

          </section>
      </ThemeProvider>
  );
}