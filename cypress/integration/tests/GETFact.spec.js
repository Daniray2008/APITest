import * as GETFact from '../requests/GET.request';

describe('Get Fact', () => {
    it('To see Fact', () => {
        GETFact.fact().should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.not.null;
        })
    })
})