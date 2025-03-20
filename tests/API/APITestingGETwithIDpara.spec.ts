import {test, expect} from '@playwright/test'

test.describe('API', async () =>{
    test('Make get call with payload', async ({request}) =>{
        const rs = await request.get('http://localhost:3000/studDataOnId/43')
        await expect(rs.status()).toBe(200)
        await expect(rs.ok()).toBeTruthy()
        console.log(await rs.json())
        await expect(await rs.json()).toMatchObject(
            {
                status: '200',
                message: 'success',
                studData: [
                  {
                    id: 30,
                    fname: 'teststudent1',
                    mname: 'teststudent1',
                    lname: 'teststudent1',
                    gender: 'Male',
                    dob: '2002-12-31T18:30:00.000Z',
                    twelvem: '88',
                    tenm: '77',
                    address: 'test',
                    state: 'test',
                    mbno: '8530871617',
                    city: 'test',
                    fillfees: 10000,
                    addharno: '352422829096',
                    tid: 43,
                    pcode: '416208',
                    tname: 'testreviewer1',
                    date: 'Saturday 8 March, 2025'
                  },
                  {
                    id: 32,
                    fname: 'teststudent3',
                    mname: 'teststudent3',
                    lname: 'teststudent3',
                    gender: 'Female',
                    dob: '2003-02-11T18:30:00.000Z',
                    twelvem: '79',
                    tenm: '91.80',
                    address: 'test',
                    state: 'test',
                    mbno: '0000000000',
                    city: 'test',
                    fillfees: 0,
                    addharno: '000000000000',
                    tid: 43,
                    pcode: '000000',
                    tname: 'testreviewer1',
                    date: '10-03-2025'
                  }
                ]
              }
        )

        const jsonRes = await rs.json();
        expect(jsonRes.studData[0].fname).toEqual('teststudent1')
    })

    test("api with UI verification", async ({request, page}) =>{
      const resp2 = await request.get('https://api.demoblaze.com/entries')
      const jsonresp2 = await resp2.json();
      console.log(jsonresp2.Items[0].title)
      await page.goto('https://www.demoblaze.com/');

      await expect(page.getByRole('link', {name : 'Samsung galaxy s6'})).toHaveText(jsonresp2.Items[0].title)
    })

    
})