import { connect } from 'react-redux';
import { RootState } from '../../store/store';
import { sortHits } from '../../store/reducers/ActionCreators';
import { Indicator } from './Indicator';

const mapStateToProps = (state: RootState) => ({
  currentPage: state.hitReducer.currentPage,
  totalPages: state.hitReducer.totalPages,
  category: state.hitReducer.category,
});

export const IndicatorContainer = connect(mapStateToProps, { sortHits })(Indicator);