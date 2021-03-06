const INITIAL_STATE = {
    currentUser: null,
};

// state = INITIAL_STATE ako je state undefiner ili nije setovan (pocetni korak), onda koristi INITIAL_STATE kao pocetno a na dalje koristi state aplikacije
const userReducer = (state = INITIAL_STATE, action) => {
    // funkcija dobija currentState i akciju koju treba da odradi nad tim statom (da apdejtuje state)
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;
