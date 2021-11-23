import * as GETBreeds from '../requests/GET.request';

describe('Get Breeds', () => {
    it('To see Breeds', () => {
        GETBreeds.breeds().should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.not.null;
        })
    })
})