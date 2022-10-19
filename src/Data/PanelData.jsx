import monopanel from '../Assets/monocrystalline.png'
import polypanel from '../Assets/polycrystalline.png'
import thinpanel from '../Assets/thinfilm.png'

const PanelData = [
    {title: 'Monocrystalline',
     image: monopanel,
     text: 'are the most space-efficient and longest-lasting type since they use pure silicon. However, the use of pure silicon makes it the most expensive type',
     points: <ul>
                <li>flexible and inexpensive</li>
                <li>More visual appeal</li>
                <li>Degrades with extended sun exposure</li>
                <li>Lower efficiency</li>
            </ul>
    },
    {title: 'Polycrystalline',
     image: polypanel,
     text: 'Less wastage of silicon than Monocrystalline panels makes these panels cheaper however they are less efficient as their silicon purity is much lower. They also perform poorly in high temperature environments as they have lower heat tolerance.',
     points: <ul>
                <li>flexible and inexpensive</li>
                <li>More visual appeal</li>
                <li>Degrades with extended sun exposure</li>
                <li>Lower efficiency</li>
            </ul>
    },
    {title: 'Thin Film',
     image: thinpanel,
     text: 'Very fine layers that are thin enough to be flexible, and they come in various sizes, giving it an advantage over the other 2 Solar panels. They, however, have lower efficiency than the silicon-based Solar panels',
     points: <ul>
                <li>flexible and inexpensive</li>
                <li>More visual appeal</li>
                <li>Degrades with extended sun exposure</li>
                <li>Lower efficiency</li>
            </ul>
    }
]

export default PanelData;