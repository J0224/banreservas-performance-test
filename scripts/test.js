import http from 'k6/http';
import { check, sleep } from 'k6';
import { SharedArray } from 'k6/data';

const BASE_URL = 'https://fakestoreapi.com/products';

// Read CSV file
const productIds = new SharedArray('products', function () {

    return open('../data/products.csv')
        .split('\n')
        .slice(1)
        .map(id => id.trim())
        .filter(Boolean);
});

export const options = {

    scenarios: {

        load_test: {

            executor: 'ramping-vus',

            stages: [

                // Ramp-up
                { duration: '10s', target: 10 },

                // Stable load
                { duration: '20s', target: 10 },

                // Ramp-down
                { duration: '10s', target: 0 },
            ],
        },
    },

    thresholds: {

        http_req_duration: [

            'p(95)<800',
            'avg<500'
        ],

        http_req_failed: ['rate<0.01'],
    },
};

export default function () {

    // Random startup delay
    const delay = Math.random() * (8 - 4) + 4;

    sleep(delay);

    // Random product ID
    const randomId =
        productIds[Math.floor(Math.random() * productIds.length)];

    const url = `${BASE_URL}/${randomId}`;

    // Send request
    const response = http.get(url);

    // Validations
    check(response, {

        'status is 200': (r) => r.status === 200,

        'response time < 800ms': (r) =>
            r.timings.duration < 800,

        'response body exists': (r) =>
            r.body.length > 0,
    });

    sleep(1);
}