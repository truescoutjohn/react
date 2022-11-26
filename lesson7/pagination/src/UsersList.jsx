import React from 'react';
import Pagination from './Pagination.jsx';
import User from './User.jsx';

const DEFAULT_ITEMS_PER_PAGE = 3;

class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.goPrev = this.goPrev.bind(this);
    this.goNext = this.goNext.bind(this);
    this.state = {
      currentPage: 1,
      totalItems: this.props.users.length,
      itemsPerPage: DEFAULT_ITEMS_PER_PAGE,
    };
  }

  goPrev(event) {
    this.setState(function (prevState) {
      if (prevState.currentPage <= 1) {
        return {
          currentPage: 1,
        };
      }
      return {
        currentPage: prevState.currentPage - 1,
      };
    });
  }

  goNext(event) {
    this.setState(function (prevState) {
      const maxPage = Math.ceil(this.state.totalItems / this.state.itemsPerPage);

      if (prevState.currentPage >= maxPage) {
        return {
          currentPage: maxPage,
        };
      }

      return {
        currentPage: prevState.currentPage + 1,
      };
    });
  }

  render() {
    const from = (this.state.currentPage - 1) * this.state.itemsPerPage;
    const to = from + this.state.itemsPerPage;
    return (
      <>
        <Pagination
          currentPage={this.state.currentPage}
          goNext={this.goNext}
          goPrev={this.goPrev}
          itemsPerPage={this.state.itemsPerPage}
          totalItems={this.state.totalItems}
        />
        <ul className="users">
          {this.props.users.slice(from, to).map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </>
    );
  }
}

export default UsersList;
