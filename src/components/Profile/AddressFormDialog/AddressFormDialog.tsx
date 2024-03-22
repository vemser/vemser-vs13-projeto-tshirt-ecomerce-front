import { Box, Modal } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { iAddress } from "../../../types/Address";
import { yupResolver } from "@hookform/resolvers/yup";
import { addressSchema } from "../../../schemas/AddressSchema";
import {
  useGetEstadosQuery,
  useGetCidadesQuery,
} from "../../../services/AddressService";
import { ChangeEvent, useEffect, useState } from "react";

interface AddressFormDialogProps {
  open: boolean;
  handleClose: () => void;
  edit?: boolean;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  maxHeight: "90vh",
  overflow: "auto",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const AddressFormDialog = ({
  open,
  handleClose,
  edit,
}: AddressFormDialogProps) => {
  const [estados, setEstados] = useState<[]>([]);
  const [cidades, setCidades] = useState<[]>([]);
  const [idEstado, setIdEstado] = useState<number>(24);
  const { data: cidadesData } = useGetCidadesQuery(idEstado);
  const { data } = useGetEstadosQuery();

  useEffect(() => {
    if (data) {
      setEstados(data);
    }
    if (cidadesData) {
      setCidades(cidadesData);
    }
  }, []);

  const handleEstadoChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedIdEstado = Number(event.target.value);
    setIdEstado(selectedIdEstado);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iAddress>({
    resolver: yupResolver(addressSchema),
  });

  const onSubmit: SubmitHandler<iAddress> = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2 className="text-primary text-2xl font-bold">
            {edit ? "Editar Endereço" : "Adicionar Endereço"}
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="my-6">
              <label htmlFor="logradouro" className="text-primary">
                Rua
              </label>
              <input
                type="text"
                id="logradouro"
                // defaultValue={fakeUser.name}
                {...register("logradouro")}
                className="w-full border border-primary p-3 rounded-lg disabled:opacity-50 invalid:border-red-500  "
              />
              {errors.logradouro && (
                <p className="text-red-500">{errors.logradouro.message}</p>
              )}
            </div>
            <div className="my-6">
              <label htmlFor="numero" className="text-primary">
                Número
              </label>
              <input
                type="number"
                id="numero"
                min={0}
                // defaultValue={fakeUser.name}
                {...register("numero")}
                className="w-full border border-primary p-3 rounded-lg disabled:opacity-50 invalid:border-red-500  "
              />
              {errors.numero && (
                <p className="text-red-500">{errors.numero.message}</p>
              )}
            </div>
            <div className="my-6">
              <label htmlFor="complemento" className="text-primary">
                Complemento
              </label>
              <input
                type="text"
                id="complemento"
                // defaultValue={fakeUser.name}
                {...register("complemento")}
                className="w-full border border-primary p-3 rounded-lg disabled:opacity-50 invalid:border-red-500  "
              />
              {errors.complemento && (
                <p className="text-red-500">{errors.complemento.message}</p>
              )}
            </div>
            <div className="my-6">
              <label htmlFor="referencia" className="text-primary">
                Referência
              </label>
              <input
                type="text"
                id="referencia"
                // defaultValue={fakeUser.name}
                {...register("referencia")}
                className="w-full border border-primary p-3 rounded-lg disabled:opacity-50 invalid:border-red-500  "
              />
              {errors.referencia && (
                <p className="text-red-500">{errors.referencia.message}</p>
              )}
            </div>
            <div className="my-6">
              <label htmlFor="bairro" className="text-primary">
                Bairro
              </label>
              <input
                type="text"
                id="bairro"
                // defaultValue={fakeUser.name}
                {...register("bairro")}
                className="w-full border border-primary p-3 rounded-lg disabled:opacity-50 invalid:border-red-500  "
              />
              {errors.bairro && (
                <p className="text-red-500">{errors.bairro.message}</p>
              )}
            </div>
            <div className="my-6">
              <label htmlFor="cep" className="text-primary">
                CEP
              </label>
              <input
                type="text"
                id="cep"
                // defaultValue={fakeUser.name}
                {...register("cep")}
                className="w-full border border-primary p-3 rounded-lg disabled:opacity-50 invalid:border-red-500  "
              />
              {errors.cep && (
                <p className="text-red-500">{errors.cep.message}</p>
              )}
            </div>
            <div className="my-6">
              <label htmlFor="estado" className="text-primary">
                Estado
              </label>
              <select
                id="estado"
                // defaultValue={fakeUser.name}
                {...register("estado")}
                className="w-full border border-primary p-3 rounded-lg disabled:opacity-50 invalid:border-red-500  "
                onChange={handleEstadoChange}
              >
                {estados &&
                  estados.map((estado: any) => (
                    <option key={estado.idEstado} value={estado.sigla}>
                      {estado.nome}
                    </option>
                  ))}
              </select>
              {errors.estado && (
                <p className="text-red-500">{errors.estado.message}</p>
              )}
            </div>
            <div className="my-6">
              <label htmlFor="cidade" className="text-primary">
                Cidade
              </label>
              <select
                id="cidade"
                // defaultValue={fakeUser.name}
                {...register("cidade")}
                className="w-full border border-primary p-3 rounded-lg disabled:opacity-50 invalid:border-red-500"
              >
                {cidades &&
                  cidades.map((cidade: any) => (
                    <option key={cidade.idCidade} value={cidade.nome}>
                      {cidade.nome}
                    </option>
                  ))}
              </select>
              {errors.cidade && (
                <p className="text-red-500">{errors.cidade.message}</p>
              )}
            </div>
            <div className="my-6">
              <label htmlFor="pais" className="text-primary">
                Pais
              </label>
              <input
                type="text"
                id="pais"
                defaultValue={"Brasil"}
                disabled
                // disabled={!editProfile}
                {...register("pais")}
                className="w-full border border-primary p-3 rounded-lg disabled:opacity-50 invalid:border-red-500"
              />
              {errors.pais && (
                <p className="text-red-500">{errors.pais.message}</p>
              )}
            </div>
            <div className="flex ">
              <button
                type="button"
                onClick={handleClose}
                className="w-full bg-editGray text-primary p-3 rounded-lg mr-2 hover:bg-gray-300"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="w-full bg-primary text-white p-3 rounded-lg hover:bg-opacity-90"
              >
                Adicionar endereço
              </button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default AddressFormDialog;
