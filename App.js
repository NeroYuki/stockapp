import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import StockButton from './StockButton'
import API from './Api' 

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stockName: "-",
            stockIndex: "0.00",
            stockChangeRaw: "0.00",
            stockChangePercent: "0.00", 
        }

        this.changeIndex = this.changeIndex.bind(this)
        this.changeIndex("NASDAQ", "IXIC")
    }

    async changeIndex(name, code) {
        console.log(code)
        let res = await API(code)
        this.setState({
            stockName: name,
            stockIndex: res.stockIndex.toFixed(2),
            stockChangeRaw: (res.stockChangeRaw > 0)? "+" + res.stockChangeRaw.toFixed(2) : res.stockChangeRaw.toFixed(2),
            stockChangePercent: (res.stockChangePercent > 0)? "+" + res.stockChangePercent.toFixed(2) : res.stockChangePercent.toFixed(2),
        })
    }

    render() {
        const colorStyle = (this.state.stockChangeRaw[0] == "+")? {color: 'green'} : {color: 'red'}

        return (
            <View style={style.container}>
                <View style={style.header}>
                    <Text style={style.stockName}>{this.state.stockName}</Text>
                    <Text style={style.stockNumber}>{this.state.stockIndex}</Text>
                    <Text style={[style.stockChange, colorStyle]}>{this.state.stockChangeRaw} ({this.state.stockChangePercent}%)</Text>
                </View>
                <View style={style.footer}>
                    <StockButton name="S&P" code="SPX" onPress={this.changeIndex}></StockButton>
                    <StockButton name="NASDAQ" code="IXIC" onPress={this.changeIndex}></StockButton>
                    <StockButton name="Dow Jones" code="DJI" onPress={this.changeIndex}></StockButton>
                    <StockButton name="Amazon" code="AMZN" onPress={this.changeIndex}></StockButton>
                    <StockButton name="Apple" code="AAPL" onPress={this.changeIndex}></StockButton>
                    <StockButton name="Google" code="GOOG" onPress={this.changeIndex}></StockButton>
                    <StockButton name="Microsoft" code="MSFT" onPress={this.changeIndex}></StockButton>
                    <StockButton name="Facebook" code="FB" onPress={this.changeIndex}></StockButton>
                    <StockButton name="Alibaba" code="BABA" onPress={this.changeIndex}></StockButton>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    stockName: {
        fontSize: 38,
    },
    stockNumber: {
        fontSize: 80,
    },
    stockChange: {
        fontSize: 40,
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default App;
