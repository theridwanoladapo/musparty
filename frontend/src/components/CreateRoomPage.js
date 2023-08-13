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

class CreateRoomPage extends Component {
    defaultVotes = 2

    constructor(props) {
        super(props)
        this.state = {
            guestCanPause: true,
            votesToSkip: this.defaultVotes,
        }

        this.handleVotesChange = this.handleVotesChange.bind(this)
        this.handleGuestCanPauseChange = this.handleGuestCanPauseChange.bind(this)
        this.handleCreateRoomButtonClicked = this.handleCreateRoomButtonClicked.bind(this)
    }

    handleVotesChange = (e) => {
        this.setState({
            votesToSkip: e.target.value,
        })
    }

    handleGuestCanPauseChange = (e) => {
        this.setState({
            guestCanPause: e.target.value === true ? true : false,
        })
    }

    handleCreateRoomButtonClicked = (e) => {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                votes_to_skip: this.state.votesToSkip,
                guest_can_pause: this.state.guestCanPause
            })
        }

        fetch('/api/create-room', requestOptions)
            .then((response) => response.json())
            .then((data) => this.props.navigate('/room/'+data.code))
    }

    render() {
        return <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: "100vh" }}>
                <CssBaseline />
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
                            Create A Room
                        </Typography>
                        
                        <Box sx={{ mt: 1 }} align={'center'}>
                            <Box sx={{
                                my: 2,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}>
                                <FormLabel>Guest Control of Playback State</FormLabel>
                                <RadioGroup row defaultValue={"true"} onChange={this.handleGuestCanPauseChange}>
                                    <FormControlLabel 
                                        value="true" 
                                        control={<Radio color='primary' />} 
                                        label="Play/Pause" 
                                    />
                                    <FormControlLabel 
                                        value="false" 
                                        control={<Radio color='secondary' />} 
                                        label="No Control" 
                                    />
                                </RadioGroup>
                            </Box>
                        
                            <Box sx={{
                                my: 2,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}>
                                <TextField 
                                    margin="normal" 
                                    required={true}
                                    type="number"
                                    onChange={this.handleVotesChange}
                                    fullWidth 
                                    label="Votes Required To Skip Song" 
                                    defaultValue={this.defaultVotes} 
                                    InputProps={{
                                        inputProps: {
                                            min: 1, style: { textAlign: "center" }
                                        }
                                    }}
                                />
                            </Box>

                            <Box sx={{
                                mb: 2,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}>
                                <Button type="submit" variant="contained" sx={{ mb: 2 }} onClick={this.handleCreateRoomButtonClicked}>
                                    Create A Room
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

export default withRouter(CreateRoomPage)