import { Box, Modal, Typography } from "@mui/material";
import { useState } from "react";
import { LuShoppingBag } from "react-icons/lu";
import { useLocation, useNavigate } from "react-router-dom";

const Subtotal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <aside
      className="
    bg-gray-100
    rounded-lg
    p-5
    flex
    flex-col
    justify-between
    gap-5
    lg:max-w-80
    mx-auto
  "
    >
      <p className="font-bold flex justify-between">
        Subtotal <span>R$ 200</span>
      </p>

      <div>
        <span>Digite o Cupom de Desconto</span>
        <input
          type="text"
          className="rounded-lg border border-black ph-full w-full p-3 text-primary "
          placeholder="ISHIRTS15"
        />
      </div>
      <p className="flex justify-between">
        Frete <span>R$ 24</span>
      </p>
      <p className="font-bold flex justify-between">
        Total <span>R$ 224,00</span>
      </p>
      <button
        onClick={() =>
          location.pathname === "/review-your-order" && handleOpen()
        }
        className="bg-black text-secondary rounded-lg p-4 hover:bg-opacity-90"
      >
        Confirmar pedido
      </button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            bgcolor: "background.paper",
            border: "1px solid gray",
            boxShadow: 24,
            p: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            "@media (max-width: 600px)": {
              width: "95%",
            },
          }}
        >
          <div className="rounded-full flex items-center justify-center w-28 h-28 bg-gray-100">
            <div className="rounded-full flex items-center justify-center w-4/5 h-4/5 bg-gray-300">
              <div className="rounded-full flex items-center justify-center w-4/5 h-4/5 bg-primary">
                <LuShoppingBag color="white" size={26} />
              </div>
            </div>
          </div>
          <Typography
            id="confirmation"
            variant="h6"
            sx={{ fontWeight: "600", mt: 2 }}
            component="h2"
          >
            Seu pedido foi confirmado
          </Typography>
          <Typography id="confirmation-text" sx={{ mt: 1, fontWeight: "400" }}>
            Obrigado por comprar conosco! Já estamos preparando seu pedido.
            Assim que estiver pronto, enviaremos um email de confirmação.
          </Typography>
          <button
            onClick={handleClose}
            className="bg-primary text-secondary rounded-lg p-4 max-h-14 hover:bg-opacity-90 w-full mt-6"
          >
            Ver pedido
          </button>
          <button
            onClick={() => navigate("/")}
            className="text-primary border border-primary rounded-lg p-4 max-h-14 transition-colors hover:bg-primary hover:text-secondary w-full mt-2"
          >
            Voltar para o início
          </button>
        </Box>
      </Modal>
    </aside>
  );
};

export default Subtotal;
