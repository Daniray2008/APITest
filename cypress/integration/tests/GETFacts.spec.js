import * as GETFacts from '../requests/GET.request';

describe('Get Facts', () => {
    it('To list all Facts', () => {
        GETFacts.facts().should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.not.null;
        })
    })
})