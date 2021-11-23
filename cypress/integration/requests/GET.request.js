// <reference types="cypress" />

function fact() {
    return cy.request({
        method: 'GET',
        url: 'fact',
        failOnStatusCode: false,
    })
};

function facts() {
    return cy.request({
        method: 'GET',
        url: 'facts',
        failOnStatusCode: false,
    })
};

function breeds() {
    return cy.request({
        method: 'GET',
        url: 'breeds',
        failOnStatusCode: false,
    })
};

export {fact, facts, breeds};