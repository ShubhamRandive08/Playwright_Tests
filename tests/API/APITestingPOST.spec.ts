// Write the test case for the make a post call

import {test, expect} from '@playwright/test'
import { request } from 'http'

test.describe('API testing', async () =>{
    test('POST method in Playwright', async ({request}) =>{
        const rs  = await request.post(`${process.env.API_BASE_URL}/insertStaff`, {
            data : {
                "tname": "test",
                "email": "test5@gmail.com",
                "username": "test",
                "password": "test"
            }
        })

        const jsonRes = await rs.json();
        console.log(jsonRes)
        expect(rs.statusText()).toBe("OK")
    })
})