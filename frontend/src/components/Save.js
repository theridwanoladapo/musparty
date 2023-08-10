import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
    Button,
    Grid,
    Typography,
    TextField,
    FormHelperText,
    FormControl,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormLabel
} from '@mui/material'

export default class CreateRoomPage extends Component {
    defaultVotes = 2

    constructor(props) {
        super(props)
    }

    render() {
        return <Grid container spacing={1}>
            <Grid item xs={12} align="center">
                <Typography component="h4" variant="h4">
                    Create A Room
                </Typography>
            </Grid>
            <Grid item xs={12} align="center">
                <FormControl component="fieldset">
                    <FormHelperText>
                        <span align="center">Guest Control of Playback State</span>
                    </FormHelperText>
                    <RadioGroup row defaultValue={"true"}>
                        <FormControlLabel 
                            value="true" 
                            control={<Radio color='primary' />} 
                            label="Play/Pause" 
                            labelPlacement="bottom" 
                        />
                        <FormControlLabel 
                            value="false" 
                            control={<Radio color='secondary' />} 
                            label="No Control" 
                            labelPlacement="bottom" 
                        />
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item xs={12} align="center">
                <FormControl>
                    <TextField required 
                        type="number" 
                        defaultValue={this.defaultVotes} 
                        inputProps={{
                            min: 1,
                            style: { textAlign: "center" }
                        }}
                    />
                    <FormHelperText>
                        <span align="center">Votes Required To Skip Song</span>
                    </FormHelperText>
                </FormControl>
            </Grid>
            <Grid item xs={12} align="center">
                <Button color="primary" variant="contained">
                    Create A Room
                </Button>
            </Grid>
            <Grid item xs={12} align="center">
                <Button color="secondary" variant="contained" to="/" component={Link}>
                    Back
                </Button>
            </Grid>
        </Grid>
    }
}