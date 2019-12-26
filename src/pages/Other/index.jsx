import React from 'react';

// REDUX
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as OtherPageActions from '../../store/actions/otherPage';

function Other({ otherPage, changeOtherPageText, resetOtherPageText }) {
    return (
        <>
            <h1> {otherPage.OtherPageText} </h1>
            <Link to={'/'}> Main Page </Link> <br />
            <button
                type="button"
                onClick={() => changeOtherPageText('New Other Page Text')}
            >
                Alterar Texto
            </button>
            <button type="button" onClick={() => resetOtherPageText()}>
                Resetar Texto
            </button>
        </>
    );
}

const mapStateToProps = state => ({
    otherPage: state.OtherPage,
});

const mapDispatchToProps = dispatch => ({
    changeOtherPageText: newText =>
        dispatch(OtherPageActions.changeOtherPageText(newText)),
    resetOtherPageText: () => dispatch(OtherPageActions.resetOtherPageText()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Other);
