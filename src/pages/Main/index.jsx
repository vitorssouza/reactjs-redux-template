import React from 'react';

// REDUX
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as MainPageActions from '../../store/actions/mainPage';

function Main({ mainPage, changeMainPageText, resetMainPageText }) {
    return (
        <>
            <h1> {mainPage.MainPageText} </h1>
            <Link to={'/other'}> Other Page </Link> <br />
            <button
                type="button"
                onClick={() => changeMainPageText('New Main Page Text')}
            >
                Alterar Texto
            </button>
            <button type="button" onClick={() => resetMainPageText()}>
                Resetar Texto
            </button>
        </>
    );
}

const mapStateToProps = state => ({
    mainPage: state.MainPage,
});

const mapDispatchToProps = dispatch => ({
    changeMainPageText: newText =>
        dispatch(MainPageActions.changeMainPageText(newText)),
    resetMainPageText: () => dispatch(MainPageActions.resetMainPageText()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
