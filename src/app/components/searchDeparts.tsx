import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    CircularProgress,
    Typography,
    Box,
    AppBar,
    Toolbar,
    TextField,
} from '@mui/material';

const SearchDeparts = () => {
    const [station, setStations] = useState(null);
    const [ligne, setLignes] = useState(null);
    const [searchStation, setSearchStation] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);

    function renderDataLignes() {
        if (loading) {
            return <CircularProgress />;
        }
        const lignes = ligne
            .filter((ligne) => ligne.stations.includes(searchStation))
            .map((ligne) => (
                <TableRow key={ligne._id}>
                    <TableCell>{ligne.nom}</TableCell>
                    <TableCell>{ligne.premier_depart}</TableCell>
                    <TableCell>{ligne.dernier_depart}</TableCell>
                </TableRow>
            ));
        return (
            <TableContainer component={Paper} sx={{ marginTop: 2 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nom</TableCell>
                            <TableCell>Premier Départ</TableCell>
                            <TableCell>Dernier Départ</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>{lignes}</TableBody>
                </Table>
            </TableContainer>
        );
    }

    function renderDataStations() {
        if (loading) {
            return <CircularProgress />;
        }
        const filteredStations = station.filter((station) =>
            station.nom.toLowerCase().includes(searchQuery.toLowerCase())
        );
        const stations = filteredStations.map((station) => (
            <TableRow key={station._id} onClick={() => setSearchStation(station._id)} sx={{ cursor: 'pointer' }}>
                <TableCell>{station.nom}</TableCell>
            </TableRow>
        ));
        return (
            <TableContainer component={Paper} sx={{ marginTop: 2, maxHeight: 300 }}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell>Stations</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>{stations}</TableBody>
                </Table>
            </TableContainer>
        );
    }

    useEffect(() => {
        axios
            .get('http://localhost:5000/station')
            .then((data) => setStations(data.data.stationData))
            .catch((error) => console.log(error));
        axios
            .get('http://localhost:5000/ligne')
            .then((data) => setLignes(data.data.ligneData))
            .then(() => setLoading(false))
            .catch((error) => console.log(error));
    }, []);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar className= "bg-blueOcean">
                    <Typography className= "bg-blueOcean" variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Recherche de Départs
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box sx={{ padding: 2 }}>
                <TextField
                    label="Rechercher une station"
                    variant="outlined"
                    fullWidth
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    sx={{ marginBottom: 2 }}
                />
                {renderDataStations()}
                <Typography variant="h4" component="h2" gutterBottom sx={{ marginTop: 4 }}>
                    Lignes passant par cette station :
                </Typography>
                {renderDataLignes()}
            </Box>
        </Box>
    );
};

export default SearchDeparts;
