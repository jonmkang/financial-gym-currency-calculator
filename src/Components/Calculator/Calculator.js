import React, {useState, useEffect} from 'react';
import { Container, Segment, Grid, Dropdown, Form, Label } from 'semantic-ui-react';
import './Calculator.css';

function setTwoNumberDecimal(num){
    const twoDecimal = parseFloat(num).toFixed(2);

    return twoDecimal
}





export default function Calculator() {
    const [currentAmount, updateAmount] = useState(1);
    const [currentCurrency, updateCurrentCurrency] = useState(0);
    const [foreignCurrency, updateForeignCurrency] = useState(0);
    const [rates, updateRates] = useState(0);
    const [error, updateError] = useState(null);

    //Fetch request for initial exchange rates.
    useEffect(() => {
        fetch('https://api.exchangeratesapi.io/latest')
              .then((resp) => resp.json())
              .then(json => updateRates(json.rates))
    }, []);
    

    //Create the initial array for currency values with name of currency as a key.
    const currencyElements = [];
    for(const key in rates){
        currencyElements.push({ key: key, value: rates[key], text:key })
    };

    currencyElements.sort((a, b) => {
        if (a.text < b.text) {
          return -1;
        }
        if (a.text > b.text) {
          return 1;
        }
      
        // names must be equal
        return 0;
    });

    //Checks if the amount is a valid number up to 2 decimal places
    function checkError(input){
        const twoDecimal = parseFloat(input);
        var regexp = /^[0-9]*(\.[0-9]{0,2})?$/;

        //Checks if input is empty, passes the decimal test and is larger than zero.
        if((typeof twoDecimal === 'number' && regexp.test(twoDecimal) && twoDecimal > 0) || input === ''){
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

    return(
        <Segment placeholder color='teal' className="calculator-segment">
            <Grid columns={3} stackable textAlign='center'>
            <Grid.Row verticalAlign='middle'>
                <Grid.Column>
                    <Form>
                        <Form.Field>
                            <Form.Input size='huge' label='Enter Currency Amount' defaultValue={1} onChange={(e) => updateAmount(parseInt(e.target.value))} onBlur={(e) => checkError(e.target.value)}/>
                            {error}
                        </Form.Field>
                    </Form>
                </Grid.Column>
        
                <Grid.Column>
                    <Segment>
                        <Label color='teal' pointing='below' attached='top'>Current Currency</Label>
                        <Dropdown
                            defaultValue={1}
                            onChange={(e, {value}) => updateCurrentCurrency(value)}
                            placeholder='Select Country'
                            selection
                            search
                            options={currencyElements}
                            />
                    </Segment>
                    <Segment>
                        <Label color='teal' pointing='below' attached='top'>Exchange To</Label>
                        <Dropdown
                            defaultValue={1}
                            onChange={(e, { value }) => updateForeignCurrency(value)}
                            placeholder='Select Country'
                            selection
                            search
                            options={currencyElements}
                            />   
                    </Segment>
                             
                </Grid.Column>
                <Grid.Column>
                    <Label color='teal' size='big'>Your amount in {getKeyByValue(rates, foreignCurrency)}</Label>
                    <Label size='big'>{currentAmount/currentCurrency*foreignCurrency > 0 ? parseFloat(currentAmount/currentCurrency*foreignCurrency).toFixed(2) : 0}</Label>
                </Grid.Column>
            </Grid.Row>
            </Grid>
        </Segment>
    )
}