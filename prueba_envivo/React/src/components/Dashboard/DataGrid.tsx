import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import axios from "axios";

interface Episodios{
    id: number,
    nombre:string
};

export default function DataGridDemo() {
    const [rows, setRows] = useState<Episodios[]>([]);
    /* const [rows, setRows] = useState<Episodios[]>([]); */
    const [loading, setLoading] = useState(false);
    const [titulo, setTitulo] = useState("");

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Nombre', width: 200 },
        { field: 'status', headerName: 'Estado', width: 130 },
        { field: 'species', headerName: 'Especie', width: 130 },
        { field: 'gender', headerName: 'Genero', width: 130 },
    ];

    const fetchData = async () => {
        try {
            const response = await axios.get('https://rickandmortyapi.com/api/character');
            console.log(data);
            const data = response.data.results;
            setRows(data); 
            setLoading(true)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if(loading == true)
        setTitulo("Datos cargados");
    }, [loading]);

    return (
        <Box>
            <DataGrid rows={rows} columns={columns} />
        </Box>
    );
}

//se debe acceder al mensaje