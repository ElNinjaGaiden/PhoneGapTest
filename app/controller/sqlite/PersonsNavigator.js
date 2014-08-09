Ext.define('PhoneGapTest.controller.sqlite.PersonsNavigator', {
    extend: 'Ext.app.Controller',
    requires: [
        'PhoneGapTest.view.sqlite.PersonEditor'
    ],
    
    config: {
        refs: {
            personsNavigator: 'personsNavigator',
            personsNavigatorNavButton: 'button[name = personsNavigatorNavButton]'
        },
        control: {
            personsNavigator: {
                push: 'PersonsNavigatorPushed',
                pop: 'PersonsNavigatorPoped'
            },
            personsNavigatorNavButton: {
                tap: 'PersonsNavigatorNavButtonTapped'
            }
        }
    },
    
    PersonsNavigatorNavButtonTapped: function (button) {
        var personsNavigator = this.getPersonsNavigator();
        if (personsNavigator) {
            var personEditor = Ext.create('personEditor', {});
            personsNavigator.push(personEditor);
        }
    },

    PersonsNavigatorPushed: function (navigator, view) {
        var personsNavigatorNavButton = this.getPersonsNavigatorNavButton();
        personsNavigatorNavButton.hide();
    },

    PersonsNavigatorPoped: function (navigator, view) {
        var personsNavigatorNavButton = this.getPersonsNavigatorNavButton();
        personsNavigatorNavButton.show();
    }
});
