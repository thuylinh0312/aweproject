import React from 'react'
import {View, StyleSheet, Text, TextInput, Image, ScrollView} from 'react-native'

const data = [
    {
      "id": 1,
      "name": "Bitcoin",
      "symbol": "BTC",
      "slug": "bitcoin",
      "num_market_pairs": 9288,
      "date_added": "2013-04-28T00:00:00.000Z",
      "tags": [
        "mineable",
        "pow",
        "sha-256",
        "store-of-value",
        "state-channel",
        "coinbase-ventures-portfolio",
        "three-arrows-capital-portfolio",
        "polychain-capital-portfolio",
        "binance-labs-portfolio",
        "blockchain-capital-portfolio",
        "boostvc-portfolio",
        "cms-holdings-portfolio",
        "dcg-portfolio",
        "dragonfly-capital-portfolio",
        "electric-capital-portfolio",
        "fabric-ventures-portfolio",
        "framework-ventures-portfolio",
        "galaxy-digital-portfolio",
        "huobi-capital-portfolio",
        "alameda-research-portfolio",
        "a16z-portfolio",
        "1confirmation-portfolio",
        "winklevoss-capital-portfolio",
        "usv-portfolio",
        "placeholder-ventures-portfolio",
        "pantera-capital-portfolio",
        "multicoin-capital-portfolio",
        "paradigm-portfolio"
      ],
      "max_supply": 21000000,
      "circulating_supply": 18998562,
      "total_supply": 18998562,
      "platform": null,
      "cmc_rank": 1,
      "self_reported_circulating_supply": null,
      "self_reported_market_cap": null,
      "last_updated": "2022-03-31T03:59:00.000Z",
      "quote": {
        "USD": {
          "price": 47099.306950485385,
          "volume_24h": 28017523509.499924,
          "volume_change_24h": -14.8592,
          "percent_change_1h": -0.28774274,
          "percent_change_24h": -0.67248761,
          "percent_change_7d": 10.18729241,
          "percent_change_30d": 9.25565082,
          "percent_change_60d": 24.14629685,
          "percent_change_90d": -0.29603474,
          "market_cap": 894819103255.8275,
          "market_cap_dominance": 41.584,
          "fully_diluted_market_cap": 989085445960.19,
          "last_updated": "2022-03-31T03:59:00.000Z"
        }
      }
    },
    {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "num_market_pairs": 5596,
      "date_added": "2015-08-07T00:00:00.000Z",
      "tags": [
        "mineable",
        "pow",
        "smart-contracts",
        "ethereum-ecosystem",
        "coinbase-ventures-portfolio",
        "three-arrows-capital-portfolio",
        "polychain-capital-portfolio",
        "binance-labs-portfolio",
        "blockchain-capital-portfolio",
        "boostvc-portfolio",
        "cms-holdings-portfolio",
        "dcg-portfolio",
        "dragonfly-capital-portfolio",
        "electric-capital-portfolio",
        "fabric-ventures-portfolio",
        "framework-ventures-portfolio",
        "hashkey-capital-portfolio",
        "kenetic-capital-portfolio",
        "huobi-capital-portfolio",
        "alameda-research-portfolio",
        "a16z-portfolio",
        "1confirmation-portfolio",
        "winklevoss-capital-portfolio",
        "usv-portfolio",
        "placeholder-ventures-portfolio",
        "pantera-capital-portfolio",
        "multicoin-capital-portfolio",
        "paradigm-portfolio",
        "injective-ecosystem",
        "bnb-chain"
      ],
      "max_supply": null,
      "circulating_supply": 120180412.624,
      "total_supply": 120180412.624,
      "platform": null,
      "cmc_rank": 2,
      "self_reported_circulating_supply": null,
      "self_reported_market_cap": null,
      "last_updated": "2022-03-31T03:59:00.000Z",
      "quote": {
        "USD": {
          "price": 3397.4156105070288,
          "volume_24h": 14839191793.563305,
          "volume_change_24h": -24.1824,
          "percent_change_1h": -0.25513063,
          "percent_change_24h": 0.39390733,
          "percent_change_7d": 12.45625037,
          "percent_change_30d": 16.87809654,
          "percent_change_60d": 31.97054228,
          "percent_change_90d": -9.14165761,
          "market_cap": 408302809925.95355,
          "market_cap_dominance": 18.9723,
          "fully_diluted_market_cap": 408302809925.95,
          "last_updated": "2022-03-31T03:59:00.000Z"
        }
      }
    },
    {
      "id": 825,
      "name": "Tether",
      "symbol": "USDT",
      "slug": "tether",
      "num_market_pairs": 30710,
      "date_added": "2015-02-25T00:00:00.000Z",
      "tags": [
        "payments",
        "stablecoin",
        "asset-backed-stablecoin",
        "avalanche-ecosystem",
        "solana-ecosystem",
        "arbitrum-ecosytem",
        "moonriver-ecosystem",
        "injective-ecosystem",
        "bnb-chain"
      ],
      "max_supply": null,
      "circulating_supply": 81933743050.86552,
      "total_supply": 85505592204.87672,
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0xdac17f958d2ee523a2206206994597c13d831ec7"
      },
      "cmc_rank": 3,
      "self_reported_circulating_supply": null,
      "self_reported_market_cap": null,
      "last_updated": "2022-03-31T03:59:00.000Z",
      "quote": {
        "USD": {
          "price": 1.0003333692545227,
          "volume_24h": 79872844809.89902,
          "volume_change_24h": -4.0567,
          "percent_change_1h": -0.00681286,
          "percent_change_24h": -0.00659492,
          "percent_change_7d": -0.00422896,
          "percent_change_30d": -0.01225111,
          "percent_change_60d": -0.00212688,
          "percent_change_90d": -0.03775188,
          "market_cap": 81961057241.70663,
          "market_cap_dominance": 3.8089,
          "fully_diluted_market_cap": 85534097140.41,
          "last_updated": "2022-03-31T03:59:00.000Z"
        }
      }
    },
    {
      "id": 1839,
      "name": "BNB",
      "symbol": "BNB",
      "slug": "bnb",
      "num_market_pairs": 774,
      "date_added": "2017-07-25T00:00:00.000Z",
      "tags": [
        "marketplace",
        "centralized-exchange",
        "payments",
        "smart-contracts",
        "alameda-research-portfolio",
        "multicoin-capital-portfolio",
        "moonriver-ecosystem",
        "bnb-chain"
      ],
      "max_supply": 165116760,
      "circulating_supply": 165116760.89,
      "total_supply": 165116760.89,
      "platform": null,
      "cmc_rank": 4,
      "self_reported_circulating_supply": null,
      "self_reported_market_cap": null,
      "last_updated": "2022-03-31T03:59:00.000Z",
      "quote": {
        "USD": {
          "price": 445.1453351302233,
          "volume_24h": 2374966031.9365005,
          "volume_change_24h": 19.2858,
          "percent_change_1h": -0.25716004,
          "percent_change_24h": 2.75224036,
          "percent_change_7d": 9.41360223,
          "percent_change_30d": 13.24266983,
          "percent_change_60d": 16.04895734,
          "percent_change_90d": -13.43946133,
          "market_cap": 73500955861.99599,
          "market_cap_dominance": 3.4157,
          "fully_diluted_market_cap": 73500955465.82,
          "last_updated": "2022-03-31T03:59:00.000Z"
        }
      }
    },
    {
      "id": 3408,
      "name": "USD Coin",
      "symbol": "USDC",
      "slug": "usd-coin",
      "num_market_pairs": 3488,
      "date_added": "2018-10-08T00:00:00.000Z",
      "tags": [
        "medium-of-exchange",
        "stablecoin",
        "asset-backed-stablecoin",
        "fantom-ecosystem",
        "arbitrum-ecosytem",
        "moonriver-ecosystem",
        "bnb-chain"
      ],
      "max_supply": null,
      "circulating_supply": 51699795173.10696,
      "total_supply": 51699795173.10696,
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
      },
      "cmc_rank": 5,
      "self_reported_circulating_supply": null,
      "self_reported_market_cap": null,
      "last_updated": "2022-03-31T03:59:00.000Z",
      "quote": {
        "USD": {
          "price": 0.9994621288752655,
          "volume_24h": 4024780907.895234,
          "volume_change_24h": -13.2226,
          "percent_change_1h": -0.06127757,
          "percent_change_24h": -0.03560885,
          "percent_change_7d": -0.03225655,
          "percent_change_30d": 0.01981296,
          "percent_change_60d": -0.06182034,
          "percent_change_90d": -0.07565481,
          "market_cap": 51671987346.128654,
          "market_cap_dominance": 2.401,
          "fully_diluted_market_cap": 51671987346.13,
          "last_updated": "2022-03-31T03:59:00.000Z"
        }
      }
    }
  ]

// export class Example1 extends React.Component {
//     render() {
//         return (
//           <View style={styles.container}>
//             <View style={{flex: 1, backgroundColor: 'red'}}>
//             </View>
//             <View style={{flex: 1, backgroundColor: 'yellow'}}>
//                 <TextInput style={{backgroundColor: 'gray'}} keyboardType='url' />
//             </View>
//             <View style={{flex: 1, backgroundColor: 'blue'}}>
                
//             </View>
//             <View style={{width: 100, height: 100, backgroundColor: 'pink'}} />
//             <View style={styles.block}>
//                 <Text>PTV</Text>
//               </View>
//           </View>
//         )
//     }
// }

export const Example1 = () => {
    return (
        <View style={styles.container}>
            <Text style={{color: 'red', fontSize: 40}}>Rank</Text>
            <View style={{flexDirection: 'row'}}>
                <Text style={{marginRight: 20}}>index</Text>
                <Text style={{marginRight: 20}}>Logo</Text>
                <Text>name</Text>
            </View>
            <ScrollView>
                {data
                    .filter(e => e.quote.USD.price < 10000)
                    .map((e, index) => (
                        <View style={{flexDirection: 'row', height: 200, backgroundColor: 'lightblue', marginBottom: 4}}>
                            <Text style={{marginRight: 50}}>{index + 1}</Text>
                            <Image 
                                style={{width: 20, height: 20, marginRight: 28}}
                                source={{uri: `https://s2.coinmarketcap.com/static/img/coins/64x64/${e.id}.png?_=5bcdbc6`}}
                            /> 
                            <Text style={{marginRight: 10}}>{`${e.name}`}</Text>
                            <Text>{e.quote.USD.price.toFixed(2)}</Text>
                        </View>
                    ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: 'row'
    },
    block: {
        position: 'absolute',
        top: 10,
        left: 20,
        width: 100, height: 100,
        backgroundColor: 'lightpink',
        justifyContent: 'center',
        alignItems: 'center',
    }
})