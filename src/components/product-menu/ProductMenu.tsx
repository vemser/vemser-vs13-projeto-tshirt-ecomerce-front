import { Accordion, AccordionSummary, Slider, Typography, AccordionDetails, Checkbox } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from "react";

export function valueRange(value: number) {
    return `${value}`
}

function ProductMenu () {
    const [value, setValue] = React.useState<number[]>([0, 1000]);
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const handleChange = (event: Event, newValue: number | number[]) => {
      setValue(newValue as number[]);
    };
    return (
        <>
            <div>
                <Accordion 
                    sx={{
                        margin: '0 !important',
                        border: 'none',
                        boxShadow: 'none',
                        padding: 0,
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        sx={{
                            '&> div.Mui-expanded': {
                                minHeight: 0,
                                margin: 0
                            },
                            '&> div': {
                                margin: 0
                            },
                            margin: '0 !important',
                            paddingLeft: 1,
                            alignItems: 'flex-start',
                            justifyContent: 'center'
                        }}
                        >
                    <Typography
                        sx={{
                            '&> div.Mui-expanded': {
                                margin: 0
                            },
                            margin: '0 !important',
                            fontSize: 20,
                            fontWeight: 'bold',
                            padding: 0,
                        }}
                    >
                        Categorias
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                        sx={{
                            margin: 0,
                            padding: 0,
                        }}
                    >
                        <Typography>
                            <ul className="pb-4">
                                <li className="flex pl-2 items-center">
                                    <input type="checkbox" className="w-4 h-4" />
                                    <p className="pl-2 text-base">Homens</p>
                                </li>
                                <li className="flex pl-2 items-center">
                                    <input type="checkbox" className="w-4 h-4" />
                                    <p className="pl-2 text-base">Mulheres</p>
                                </li>
                                <li className="flex pl-2 items-center">
                                    <input type="checkbox" className="w-4 h-4" />
                                    <p className="pl-2 text-base">Crianças</p>
                                </li>
                                <li className="flex pl-2 items-center">
                                    <input type="checkbox" className="w-4 h-4" />
                                    <p className="pl-2 text-base">Nike</p>
                                </li>
                                <li className="flex pl-2 items-center">
                                    <input type="checkbox" className="w-4 h-4" />
                                    <p className="pl-2 text-base">Adidas</p>
                                </li>
                                <li className="flex pl-2 items-center">
                                    <input type="checkbox" className="w-4 h-4" />
                                    <p className="pl-2 text-base">Puma</p>
                                </li>
                                <li className="flex pl-2 items-center">
                                    <input type="checkbox" className="w-4 h-4" />
                                    <p className="pl-2 text-base">Renner</p>
                                </li>
                            </ul>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
            <hr />
            <div className="pt-3">
                <Accordion 
                    sx={{
                        margin: '0 !important',
                        border: 'none',
                        boxShadow: 'none',
                        padding: 0,
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        sx={{
                            '&> div.Mui-expanded': {
                                minHeight: 0,
                                margin: 0
                            },
                            '&> div': {
                                margin: 0
                            },
                            margin: '0 !important',
                            paddingLeft: 1,
                            alignItems: 'flex-start',
                            justifyContent: 'center'
                        }}
                        >
                    <Typography
                        sx={{
                            '&> div.Mui-expanded': {
                                margin: 0
                            },
                            margin: '0 !important',
                            fontSize: 20,
                            fontWeight: 'bold',
                            padding: 0,
                        }}
                    >
                        Filtro por preço
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                        sx={{
                            margin: 0,
                            padding: 0,
                        }}
                    >
                        <Typography>
                        <p className="pl-2">Preço: R$ {value[0]} - R$ {value[1]}</p>
                        <div className="px-2 pb-4">
                            <Slider
                                getAriaLabel={() => 'Filter by price'}
                                value={value}
                                min={0}
                                max={1000}
                                onChange={handleChange}
                                valueLabelDisplay="auto"
                                getAriaValueText={valueRange}
                            />
                        </div>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
            <hr />
            <div className="pt-2">
            <Accordion 
                    sx={{
                        margin: '0 !important',
                        border: 'none',
                        boxShadow: 'none',
                        padding: 0,
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        sx={{
                            '&> div.Mui-expanded': {
                                minHeight: 0,
                                margin: 0
                            },
                            '&> div': {
                                margin: 0
                            },
                            margin: '0 !important',
                            paddingLeft: 1,
                            alignItems: 'flex-start',
                            justifyContent: 'center'
                        }}
                        >
                    <Typography
                        sx={{
                            '&> div.Mui-expanded': {
                                margin: 0
                            },
                            margin: '0 !important',
                            fontSize: 20,
                            fontWeight: 'bold',
                            padding: 0,
                        }}
                    >
                        Filtro por cor
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                        sx={{
                            margin: 0,
                            padding: 0,
                        }}
                    >
                        <Typography>
                            <ul className="pb-4">
                                <li className="flex pl-2 pb-1 items-center">
                                <Checkbox
                                    {...label}
                                    sx={{
                                        padding: 0,
                                        color: '#ff0303',
                                        '&.Mui-checked': {
                                            color: '#ff0303',
                                        },
                                    }}
                                />
                                    <div className="flex justify-between w-full pr-2">
                                        <p className="pl-2">Vermelho</p>
                                        <p>(10)</p>
                                    </div>
                                </li>
                                <li className="flex pl-2 pb-1 items-center">
                                <Checkbox
                                    {...label}
                                    sx={{
                                        padding: 0,
                                        color: '#0059ff',
                                        '&.Mui-checked': {
                                            color: '#0059ff',
                                        },
                                    }}
                                />
                                    <div className="flex justify-between w-full pr-2">
                                        <p className="pl-2">Azul</p>
                                        <p>(8)</p>
                                    </div>
                                </li>
                                <li className="flex pl-2 pb-1 items-center">
                                <Checkbox
                                    {...label}
                                    sx={{
                                        padding: 0,
                                        color: '#ffae00',
                                        '&.Mui-checked': {
                                            color: '#ffae00',
                                        },
                                    }}
                                />
                                    <div className="flex justify-between w-full pr-2">
                                        <p className="pl-2">Laranja</p>
                                        <p>(2)</p>
                                    </div>
                                </li>
                                <li className="flex pl-2 pb-1 items-center">
                                <Checkbox
                                    {...label}
                                    sx={{
                                        padding: 0,
                                        color: '#000',
                                        '&.Mui-checked': {
                                            color: '#000',
                                        },
                                    }}
                                />
                                    <div className="flex justify-between w-full pr-2">
                                        <p className="pl-2">Preto</p>
                                        <p>(20)</p>
                                    </div>
                                </li>
                                <li className="flex pl-2 pb-1 items-center">
                                <Checkbox
                                    {...label}
                                    sx={{
                                        padding: 0,
                                        color: '#2bff00',
                                        '&.Mui-checked': {
                                            color: '#2bff00',
                                        },
                                    }}
                                />
                                    <div className="flex justify-between w-full pr-2">
                                        <p className="pl-2">Verde</p>
                                        <p>(5)</p>
                                    </div>
                                </li>
                            </ul>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
            <hr />
            <div className="pt-2">
            <Accordion 
                    sx={{
                        margin: '0 !important',
                        border: 'none',
                        boxShadow: 'none',
                        padding: 0,
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        sx={{
                            '&> div.Mui-expanded': {
                                minHeight: 0,
                                margin: 0
                            },
                            '&> div': {
                                margin: 0
                            },
                            margin: '0 !important',
                            paddingLeft: 1,
                            alignItems: 'flex-start',
                            justifyContent: 'center'
                        }}
                        >
                    <Typography
                        sx={{
                            '&> div.Mui-expanded': {
                                margin: 0
                            },
                            margin: '0 !important',
                            fontSize: 20,
                            fontWeight: 'bold',
                            padding: 0,
                        }}
                    >
                        Filtro por tamanho
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                        sx={{
                            margin: 0,
                            padding: 0,
                        }}
                    >
                        <Typography>
                            <ul>
                                <li className="flex pl-2 items-center">
                                    <input type="checkbox" className="w-4 h-4" />
                                    <div className="flex justify-between w-full pr-2">
                                        <p className="pl-2">PP</p>
                                        <p>(10)</p>
                                    </div>
                                </li>
                                <li className="flex pl-2 items-center">
                                    <input type="checkbox" className="w-4 h-4" />
                                    <div className="flex justify-between w-full pr-2">
                                        <p className="pl-2">P</p>
                                        <p>(40)</p>
                                    </div>
                                </li>
                                <li className="flex pl-2 items-center">
                                    <input type="checkbox" className="w-4 h-4" />
                                    <div className="flex justify-between w-full pr-2">
                                        <p className="pl-2">M</p>
                                        <p>(100)</p>
                                    </div>
                                </li>
                                <li className="flex pl-2 items-center">
                                    <input type="checkbox" className="w-4 h-4" />
                                    <div className="flex justify-between w-full pr-2">
                                        <p className="pl-2">G</p>
                                        <p>(60)</p>
                                    </div>
                                </li>
                                <li className="flex pl-2 items-center">
                                    <input type="checkbox" className="w-4 h-4" />
                                    <div className="flex justify-between w-full pr-2">
                                        <p className="pl-2">GG</p>
                                        <p>(30)</p>
                                    </div>
                                </li>
                            </ul>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </>
    )
}

export default ProductMenu;