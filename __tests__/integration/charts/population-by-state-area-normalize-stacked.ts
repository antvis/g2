import { G2Spec } from '../../../src';

const RegionMap = new Map([
  ['Alaska', 'Pacific'],
  ['Alabama', 'East South Central'],
  ['Arkansas', 'West South Central'],
  ['Arizona', 'Mountain'],
  ['California', 'Pacific'],
  ['Colorado', 'Mountain'],
  ['Connecticut', 'New England'],
  ['District of Columbia', 'South Atlantic'],
  ['Delaware', 'South Atlantic'],
  ['Florida', 'South Atlantic'],
  ['Georgia', 'South Atlantic'],
  ['Hawaii', 'Pacific'],
  ['Iowa', 'West North Central'],
  ['Idaho', 'Mountain'],
  ['Illinois', 'East North Central'],
  ['Indiana', 'East North Central'],
  ['Kansas', 'West North Central'],
  ['Kentucky', 'East South Central'],
  ['Louisiana', 'West South Central'],
  ['Massachusetts', 'New England'],
  ['Maryland', 'South Atlantic'],
  ['Maine', 'New England'],
  ['Michigan', 'East North Central'],
  ['Minnesota', 'West North Central'],
  ['Missouri', 'West North Central'],
  ['Mississippi', 'East South Central'],
  ['Montana', 'Mountain'],
  ['North Carolina', 'South Atlantic'],
  ['North Dakota', 'West North Central'],
  ['Nebraska', 'West North Central'],
  ['New Hampshire', 'New England'],
  ['New Jersey', 'Middle Atlantic'],
  ['New Mexico', 'Mountain'],
  ['Nevada', 'Mountain'],
  ['New York', 'Middle Atlantic'],
  ['Ohio', 'East North Central'],
  ['Oklahoma', 'West South Central'],
  ['Oregon', 'Pacific'],
  ['Pennsylvania', 'Middle Atlantic'],
  ['Rhode Island', 'New England'],
  ['South Carolina', 'South Atlantic'],
  ['South Dakota', 'West North Central'],
  ['Tennessee', 'East South Central'],
  ['Texas', 'West South Central'],
  ['Utah', 'Mountain'],
  ['Virginia', 'South Atlantic'],
  ['Vermont', 'New England'],
  ['Washington', 'Pacific'],
  ['Wisconsin', 'East North Central'],
  ['West Virginia', 'South Atlantic'],
  ['Wyoming', 'Mountain'],
]);

export function populationByStateAreaNormalizeStacked(): G2Spec {
  return {
    width: 1200,
    height: 800,
    type: 'view',
    data: {
      type: 'fetch',
      value: 'data/population-by-state.csv',
      transform: [
        {
          type: 'fold',
          fields: [
            'Massachusetts',
            'Connecticut',
            'Maine',
            'Rhode Island',
            'New Hampshire',
            'Vermont',
            'New York',
            'Pennsylvania',
            'New Jersey',
            'North Carolina',
            'Virginia',
            'Georgia',
            'Florida',
            'Maryland',
            'South Carolina',
            'West Virginia',
            'District of Columbia',
            'Delaware',
            'Tennessee',
            'Kentucky',
            'Alabama',
            'Mississippi',
            'Texas',
            'Louisiana',
            'Oklahoma',
            'Arkansas',
            'Illinois',
            'Ohio',
            'Michigan',
            'Indiana',
            'Wisconsin',
            'Missouri',
            'Minnesota',
            'Iowa',
            'Kansas',
            'Nebraska',
            'South Dakota',
            'North Dakota',
            'Colorado',
            'Arizona',
            'Utah',
            'New Mexico',
            'Montana',
            'Idaho',
            'Nevada',
            'Wyoming',
            'California',
            'Washington',
            'Oregon',
            'Hawaii',
            'Alaska',
          ],
          key: 'state',
          value: 'population',
        },
        {
          type: 'map',
          callback: (d) => ({ ...d, region: RegionMap.get(d.state) }),
        },
      ],
    },
    children: [
      {
        type: 'area',
        transform: [{ type: 'stackY' }, { type: 'normalizeY' }],
        encode: {
          x: 'date',
          y: 'population',
          color: 'region',
          series: 'state',
        },
        labels: [
          {
            text: 'state',
            position: 'area',
            selector: 'first',
            fontSize: 10,
            transform: [{ type: 'overlapHide' }],
          },
        ],
      },
      {
        type: 'line',
        transform: [{ type: 'stackY' }, { type: 'normalizeY' }],
        encode: {
          x: 'date',
          y: 'population',
          series: 'state',
        },
        style: {
          stroke: '#000',
          lineWidth: 0.5,
          fillOpacity: 0.8,
        },
      },
    ],
  };
}
