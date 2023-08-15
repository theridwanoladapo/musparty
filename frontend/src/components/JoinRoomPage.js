import React, { Component } from 'react'
import withRouter from './withRouter'
import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    FormLabel,
    FormControlLabel,
    Radio,
    RadioGroup,
    Link,
    Paper,
    Box,
    Grid,
    Typography,
} from '@mui/material'
import EarbudsIcon from '@mui/icons-material/Earbuds'
import { createTheme, ThemeProvider } from '@mui/material/styles'


const defaultTheme = createTheme();

class JoinRoomPage extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            roomCode: "",
            error: false,
            errorMsg: "",
        }

        this.handleRoomCodeChange = this.handleRoomCodeChange.bind(this)
        this.handleEnterRoomButtonClick = this.handleEnterRoomButtonClick.bind(this)
    }

    handleRoomCodeChange = (e) => {
        this.setState({
            roomCode: e.target.value
        })
    }

    handleEnterRoomButtonClick = (e) => {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                code: this.state.roomCode
            })
        }

        fetch('api/join-room', requestOptions)
            .then((response) => {
                if(response.ok) {
                    this.props.navigate(`/room/${this.state.roomCode}`)
                } else {
                    this.setState({
                        roomCode: "",
                        error: true,
                        errorMsg: "Room Not Found"
                    })
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: "100vh" }}>
                <CssBaseline/>
                <Grid item xs={false} sm={4} md={7}
                    sx={{
                        backgroundImage:
                            "url(https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80)",
                        backgroundRepeat: "no-repeat",
                        backgroundColor: (t) =>
                            t.palette.mode === "light"
                                ? t.palette.grey[50]
                                : t.palette.grey[900],
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box sx={{
                        my: 8,
                        mx: 4,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}>
                        <Avatar sx={{ m: 2, backgroundColor: "primary.main" }}>
                            <EarbudsIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Join A Room
                        </Typography>

                        <Box sx={{ mt: 1 }} align={'center'}>
                            <Box sx={{
                                my: 2,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}>
                                <TextField 
                                    value={this.state.roomCode}
                                    error={this.state.error}
                                    helperText={this.state.errorMsg}
                                    label="Code" 
                                    placeholder="Enter a Room Code" 
                                    fullWidth 
                                    onChange={this.handleRoomCodeChange} 
                                />
                            </Box>

                            <Box sx={{
                                mb: 2,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}>
                                <Button variant="contained" sx={{ mb: 2 }} onClick={this.handleEnterRoomButtonClick}>
                                    Join Room
                                </Button>
                                <Button color="error" variant="outlined" href="/" component={Link}>
                                    Back
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    }
}

export default withRouter(JoinRoomPage)