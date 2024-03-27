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
                <h1 className="text-2xl font-bold mb-2 whitespace-nowrap">Aparência</h1>
                <p className="text-2xl mb-1 whitespace-nowrap opacity-50">Personalize a aparência do seu dispositivo</p>            
            </div>
            <div className="flex justify-end w-full mr-[10rem] ">
            <select id="languageSelect" className="p-1 border rounded" style={{ backgroundColor: 'rgb(246, 246, 246)' }}>
                  <option value="portuguese" className="bg-white">Escura</option>
                  <option value="english" className="bg-white">Claro</option>
              </select>
            </div>
          </div>

          <hr className="mr-[10rem]" />

          <div className="p-4 flex items-center justify-between">
            <div>
                <h1 className="text-2xl font-bold mb-2 whitespace-nowrap">Linguagem</h1>
                <p className="text-2xl mb-2 whitespace-nowrap opacity-50">selecione sua lingua</p>
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
                <h1 className="text-2xl font-bold mb-2 whitespace-nowrap">Autenticação de dois fatores</h1>
                <p className="text-2xl mb-2 whitespace-nowrap opacity-50">Mantenha sua conta segura ativando 2FA por e-mail</p>
            </div>
            <div className="flex justify-end w-full mr-[10rem]">
                <Switch color="primary" />
            </div>
          </div>

          <hr className="mr-[10rem]" />

          <div className="p-4 flex items-center justify-between">
            <div>
                <h1 className="text-2xl font-bold mb-2 whitespace-nowrap">Notificações via push</h1>
                <p className="text-2xl mb-2 whitespace-nowrap opacity-50">Receba notificação push</p>
            </div>
            <div className="flex justify-end w-full mr-[10rem]">
                <Switch color="primary" />
            </div>
          </div>

          <hr className="mr-[10rem]" />

          <div className="p-4 flex items-center justify-between">
            <div>
                <h1 className="text-2xl font-bold mb-2 whitespace-nowrap">Notificação na área de trabalho</h1>
                <p className="text-2xl mb-2 whitespace-nowrap opacity-50">Receba notificação push no desktop</p>
            </div>
            <div className="flex justify-end w-full mr-[10rem]">
                <Switch color="primary" />
            </div>
          </div>

          <hr className="mr-[10rem]" />

          <div className="p-4 flex items-center justify-between">
            <div>
                <h1 className="text-2xl font-bold mb-2 whitespace-nowrap">Notificações por e-mail</h1>
                <p className="text-2xl mb-2 whitespace-nowrap opacity-50">Receber notificação por e-mail</p>
            </div>
            <div className="flex justify-end w-full mr-[10rem]">
                <Switch color="primary" />
            </div>
          </div>

          </section>
      </ThemeProvider>
  );
}