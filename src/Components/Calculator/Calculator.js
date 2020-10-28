import React, {useState, useEffect} from 'react';
import { Segment, Grid, Dropdown, Form, Label } from 'semantic-ui-react';
import './Calculator.css';


export default function Calculator() {
    const [currentAmount, updateAmount] = useState(1);
    const [currentCurrency, updateCurrentCurrency] = useState(null);
    const [foreignCurrency, updateForeignCurrency] = useState(null);
    const [rates, updateRates] = useState(null);
    const [error, updateError] = useState(null);

    //Fetch request for initial exchange rates.
    useEffect(() => {
        fetch('https://api.exchangeratesapi.io/latest')
            .then((resp) => resp.json())
            .then(json => {
                updateRates(json.rates);
                updateCurrentCurrency(json.rates.USD);
                updateForeignCurrency(json.rates.CAD);
            })    
    }, []);
    
    //Create the initial array for currency values with name of currency as a key.
    const currencyElements = [];

    //Iterates through rates to create dropdown options
    for(const key in rates){
        currencyElements.push({ key: key, value: rates[key], text:key });
    };

    //Adds EUR as an option since it is the base exchange rate and not given from the API
    currencyElements.push({key: 'EUR', value: 1, text:'EUR'});

    //Sorts currencyElements in alphabetical order
    currencyElements.sort((a, b) => {
        if (a.text < b.text) {
          return -1;
        }
        if (a.text > b.text) {
          return 1;
        }
      
        return 0;
    });

    //Checks if the amount is a valid number up to 2 decimal places
    function checkError(input){
        const twoDecimal = parseFloat(input);
        var regexp = /^[0-9]*(\.[0-9]{0,2})?$/;

        //Checks if input is empty, passes the decimal test and is larger than zero.
        if((typeof twoDecimal === 'number' && regexp.test(input) && twoDecimal > 0) || input === ''){
            updateError(null);
        }else{
            updateError('Please enter a valid number to 2 decimal places');
        }
    }

    //Gets the text value of the currency to exchange to
    function getKeyByValue(object, value) {
        if(object)
            return Object.keys(object).find(key => object[key] === value);
        return
    }    

    //This prevents the calculator from loading empty default values
    if(currencyElements.length <= 1){
        return (
            <>
            </>
        )
    }

    //Sets up default values for the calculator
    const usd = currencyElements.filter(item => item.text === 'USD')[0];
    const cad = currencyElements.filter(item => item.text === 'CAD')[0];

    return(
        <Segment placeholder color='teal' className="calculator-segment">
            <Grid columns={3} stackable textAlign='center'>
            <Grid.Row verticalAlign='middle'>
                <Grid.Column>
                    <Form>
                        <Form.Field>
                            <Form.Input size='huge' label='Enter Currency Amount' defaultValue={1} onChange={(e) => {updateAmount(parseInt(e.target.value)); checkError(e.target.value)}}/>
                            {error}
                        </Form.Field>
                    </Form>
                </Grid.Column>
        
                <Grid.Column>
                    <Segment>
                        <Label color='teal' pointing='below' attached='top'>Current Currency</Label>
                        <Dropdown
                            defaultValue={usd.value}
                            onChange={(e, {value}) => {updateCurrentCurrency(value)} }
                            selection
                            search
                            options={currencyElements}
                            />
                    </Segment>
                    <Segment>
                        <Label color='teal' pointing='below' attached='top'>Exchange To</Label>
                        <Dropdown
                            defaultValue={cad.value}
                            onChange={(e, { value }) => updateForeignCurrency(value)}
                            selection
                            search
                            options={currencyElements}
                            />   
                    </Segment>
                             
                </Grid.Column>
                <Grid.Column>
                    {/*The first line grabs the key from the rates object and display the key that matches with the currency rate value
                        The second line calculates the exchange rate by using EUR as a base, reverting the current currency to the euro and changing it to the foreign currency.
                    */}
                    <Label color='teal' size='big'>Your amount in {getKeyByValue(rates, foreignCurrency) ? getKeyByValue(rates, foreignCurrency) : "CAD"}</Label>
                    <Label size='big'>{currentAmount/currentCurrency*foreignCurrency > 0 ? parseFloat(currentAmount/currentCurrency*foreignCurrency).toFixed(2) : 0}</Label>
                </Grid.Column>
            </Grid.Row>
            </Grid>
        </Segment>
    )
}