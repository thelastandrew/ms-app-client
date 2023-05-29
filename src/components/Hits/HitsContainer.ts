import { connect } from 'react-redux';
import { RootState } from '../../store/store';
import { Hits } from './Hits';

const mapStateToProps = (state: RootState) => ({
  isFetching: state.hitReducer.isFetching,
  hits: state.hitReducer.hits,
});

export const HitsContainer = connect(mapStateToProps, {})(Hits);