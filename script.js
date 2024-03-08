const json = {
    "id": "polygon",
    "description": "Polygon is a Layer 2 scaling solution for Ethereum that aims to provide faster and cheaper transactions. It is a protocol and a framework for building and connecting Ethereum-compatible blockchain networks. Polygon was formerly known as the Matic Network.",
    "tags": [
      "pos",
      "ethereum ecosystem",
      "layer 2",
      "evm"
    ],
    "coin_details": {
      "name": "Polygon",
      "symbol": "MATIC",
      "logo": "polygonlogo.webp",
      "max_supply": "10,000,000,000"
    },
    "chain_details": [
      {
        "name": "Language",
        "type": "Solidity"
      },
      {
        "name": "Consensus",
        "type": "Proof of Stake"
      },
      {
        "name": "Chain Layer",
        "type": "L2"
      },
      {
        "name": "Chain Type",
        "type": "EVM"
      }
    ],
    "official_links": {
      "website": "https://polygon.technology/",
      "whitepaper": "https://polygon.technology/papers/polygon-scalable-and-secure-proof-of-stake-blockchain.pdf",
      "documentation": "https://docs.polygon.technology/",
      "forum": "https://forum.polygon.technology/",
      "github": "https://github.com/maticnetwork/polygon-core"
    },
    "social_platforms": {
      "discord": "https://discord.com/invite/polygon",
      "twitter": "https://twitter.com/0xPolygon",
      "reddit": "https://www.reddit.com/r/0xPolygon/",
      "community": "https://community.polygon.technology/",
      "coinmarketcap_community": "https://coinmarketcap.com/community/profile/Polygon/",
      "twitter_hashtag": "https://twitter.com/hashtag/Polygon"
    },
    "meta_data": [
      {
        "name": "Data Aggregator",
        "data": [
          {
            "name": "CoinMarketCap",
            "url": "https://coinmarketcap.com/currencies/matic-network/"
          },
          {
            "name": "CoinGecko",
            "url": "https://www.coingecko.com/en/coins/matic-network"
          },
          {
            "name": "DefiLlama",
            "url": "https://defillama.com/chain/Polygon"
          },
          {
            "name": "DappRadar",
            "url": "https://dappradar.com/chain/polygon"
          },
          {
            "name": "CryptoCompare",
            "url": "https://www.cryptocompare.com/coins/matic/overview"
          },
          {
            "name": "TradingView",
            "url": "https://www.tradingview.com/symbols/MATICUSD/"
          },
          {
            "name": "CoinDesk",
            "url": "https://www.coindesk.com/price/matic-network/"
          },
          {
            "name": "Investing",
            "url": "https://www.investing.com/crypto/matic-network/matic-usd"
          },
          {
            "name": "MarketWatch",
            "url": "https://www.marketwatch.com/investing/cryptocurrency/maticusd"
          },
          {
            "name": "Yahoo Finance",
            "url": "https://finance.yahoo.com/quote/MATIC-USD"
          }
        ]
      }
    ]
  };
  
  const polygon = document.getElementById("polygon");
  
  polygon.innerHTML = `
    <h1>${json.coin_details.name} (${json.coin_details.symbol})</h1>
    <img src="${json.coin_details.logo}" alt="${json.coin_details.name} logo">
    <p>${json.description}</p>
    <h2>Tags</h2>
    <ul>
      ${json.tags.map(tag => `<li>${tag}</li>`).join("")}
    </ul>
    <h2>Coin Details</h2>
    <ul>
      <li>Max Supply: ${json.coin_details.max_supply}</li>
    </ul>
    <h2>Chain Details</h2>
    <ul>
      ${json.chain_details.map(detail => `
        <li>
          ${detail.name}: ${detail.type}
        </li>
      `).join("")}
    </ul>
    <h2>Official Links</h2>
    <ul>
      <li><a href="${json.official_links.website}">Website</a></li>
      <li><a href="${json.official_links.whitepaper}">Whitepaper</a></li>
      <li><a href="${json.official_links.documentation}">Documentation</a></li>
      <li><a href="${json.official_links.forum}">Forum</a></li>
      <li><a href="${json.official_links.github}">GitHub</a></li>
    </ul>
    <h2>Social Platforms</h2>
    <ul>
      <li><a href="${json.social_platforms.discord}">Discord</a></li>
      <li><a href="${json.social_platforms.twitter}">Twitter</a></li>
      <li><a href="${json.social_platforms.reddit}">Reddit</a></li>
      <li><a href="${json.social_platforms.community}">Community</a></li>
      <li><a href="${json.social_platforms.coinmarketcap_community}">CoinMarketCap Community</a></li>
      <li><a href="${json.social_platforms.twitter_hashtag}">Twitter Hashtag</a></li>
    </ul>
    <h2>Data Aggregators</h2>
    <ul>
      ${json.meta_data[0].data.map(data => `
        <li>
          <a href="${data.url}">${data.name}</a>
        </li>
      `).join("")}
    </ul>
  `;