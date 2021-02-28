describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/index.html');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then(($el) => {
      expect($el).to.have.value(75);
    });
  });

  it('Volume changes when slider input changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number').then(($el) => {
      expect($el).to.have.value(33);
    });
  });

  it('Audio changes when slider input changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('audio').then(($el) => {
      expect($el).to.have.prop('volume', 0.33);
    });
  });

  it('Image source changes when party horn radio selected', () => {
    cy.get('#radio-car-horn').check().trigger('input');
    cy.get('#sound-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/images/car.svg')
    });
  });

  it('Audio source changes when party horn radio selected', () => {
    cy.get('#radio-car-horn').check().trigger('input');
    cy.get('#horn-sound').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/audio/car-horn.mp3')
    });
  });

  it('Volume image changes when increasing volumes, below 34', () => {
    for(let i = 1; i < 34; i++) {
      cy.get('#volume-number').clear().type(i);
      cy.get('#volume-image').then(($el) => {
        expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
      });
    }
  });

  it('Volume image changes when increasing volumes, below 67', () => {
    for(let i = 34; i < 67; i++) {
      cy.get('#volume-number').clear().type(i);
      cy.get('#volume-image').then(($el) => {
        expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
      });
    }
  });

  it('Volume image changes when increasing volumes, below 100', () => {
    for(let i = 67; i < 100; i++) {
      cy.get('#volume-number').clear().type(i);
      cy.get('#volume-image').then(($el) => {
        expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg');
      });
    }
  });

  it('Honk button is disabled when the textbox input is a empty', () => {
    cy.get('#volume-number').clear();
    cy.get('#honk-btn').then(($el) => {
      expect($el).to.have.attr('Disabled');
    });
  });

  it('Honk button is disabled when the textbox input is a non-number', () => {
    cy.get('#volume-number').clear().type('$#((@#&skja');
    cy.get('#honk-btn').then(($el) => {
      expect($el).to.have.attr('Disabled');
    });
  });

  it('Error is shown when you type a number greater than 100', () => {
    cy.get('#volume-number').clear().type('101');
    cy.get(':invalid').then(($el) => {
      expect($el).to.exist;
    })
  });

  it('Error is shown when you type a number less then 0', () => {
    cy.get('#volume-number').clear().type('-1');
    cy.get(':invalid').then(($el) => {
      expect($el).to.exist;
    })
  });
});
