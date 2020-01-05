import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  Tooltip,
  OverlayTrigger,
  Image
} from "react-bootstrap";
import Button from "components/CustomButton/CustomButton.jsx";
import ReactTable from "react-table";
import { IMAGE_BASE_URL } from "../config";
import axios from "axios";
import _ from "lodash";
import { withRouter } from "react-router-dom";

// <tr> 
//   <td className="td-actions">
//     <OverlayTrigger placement="top" overlay={edit}>
//       <Button bsStyle="info" simple type="button">
//         <i className="fa fa-edit" />
//       </Button>
//     </OverlayTrigger>

//     <OverlayTrigger placement="top" overlay={remove}>
//       <Button bsStyle="danger" simple type="button">
//         <i className="fa fa-times" />
//       </Button>
//     </OverlayTrigger>
//   </td>
// </tr>

const requestData = (pageSize, page, sorted, filtered) => {
  return new Promise((resolve, reject) => {
    // You can retrieve your data however you want, in this case, we will just use some local data.
    let filteredData = [];
    const endpoint = `http://localhost:8080/api/movies/all`;
    axios
      .get(endpoint, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "http://localhost:3000"
        }
      })
      .then(response => {
        // filteredData = response.data.content;

        filteredData = response.data;
        // You can use the filters in your request, but you are responsible for applying them.
        // if (filtered.length) {
        //   filteredData = filtered.reduce((filteredSoFar, nextFilter) => {
        //     return filteredSoFar.filter(row => {
        //       return (row[nextFilter.id] + "").includes(nextFilter.value);
        //     });
        //   }, filteredData);
        // }
        // You can also use the sorting in your request, but again, you are responsible for applying it.
        const sortedData = _.orderBy(
          filteredData,
          sorted.map(sort => {
            return row => {
              if (row[sort.id] === null || row[sort.id] === undefined) {
                return -Infinity;
              }
              return typeof row[sort.id] === "string"
                ? row[sort.id].toLowerCase()
                : row[sort.id];
            };
          }),
          sorted.map(d => (d.desc ? "desc" : "asc"))
        );

        // You must return an object containing the rows of the current page, and optionally the total pages number.
        let res = {
          rows: sortedData.slice(pageSize * page, pageSize * page + pageSize),
          pages: Math.ceil(filteredData.length / pageSize)
        };
        // Here we'll simulate a server response with 500ms of delay.
        setTimeout(() => resolve(res), 500);
      })
      .catch(error => {
        console.log(error);
      });
  });
};

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false,
      pages: 0,
      showDialog: false,
      selectedMovie: null,
      error: null
    };

    this.fetchData = this.fetchData.bind(this);
  }

  handleEdit(movie) {
    this.props.history.push(`/admin/movies/${movie.id}`);
  }
  fetchData(state, instance) {
    // Whenever the table model changes, or the user sorts or changes pages, this method gets called and passed the current table model.
    this.setState({ loading: true });
    // Request the data however you want.  Here, we'll use our mocked service we created earlier
    requestData(state.pageSize, state.page, state.sorted, state.filtered).then(
      res => {
        this.setState({
          data: res.rows,
          pages: res.pages,
          loading: false
        });
      }
    );
  }

  render() {
    const { data, pages, loading } = this.state;
    const columns = [
      {
        Header: "Mã phim",
        accessor: "id",
        maxWidth: 100
      },
      {
        Header: "Tên phim",
        accessor: "title"
      },
      {
        Header: "Hình ảnh",
        accessor: "poster_path",
        sortable: false,
        Cell: row => (
          <React.Fragment>
            <Image src={IMAGE_BASE_URL + "w185" + row.value} rounded />
          </React.Fragment>
        )
      },
      {
        Header: "Thời lượng",
        accessor: "runtime",
        maxWidth: 100
      },
      {
        id: "views",
        Header: "Lượt xem",
        accessor: () => "views",
        maxWidth: 100
      },
      {
        id: "function",
        Header: "Chức năng",
        maxWidth: 150,
        sortable: false,
        accessor: () => "edit_delete",
        Cell: (row, index) => (
          <React.Fragment>
            <span
              onClick={() => this.handleEdit(row.original)}
              style={{
                cursor: "pointer",
                color: "#1DC7EA",
                fontSize: "22px",
                margin: "0 10px"
              }}
            >
              <i className="fa fa-edit" />
            </span>
            <span
              onClick={() => this.handleSelected(row.original)}
              style={{
                cursor: "pointer",
                color: "red",
                fontSize: "22px",
                margin: "0 10px"
              }}
            >
              <i className="fa fa-times" />
            </span>
          </React.Fragment>
        )
      }
    ];
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12} style={{ marginBottom: "5px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between"
                }}
              >
                <h3>Danh sách phim</h3>
                <Button fill pullRight bsStyle="info" bsSize="large">
                  Tạo mới
                </Button>
              </div>
            </Col>
            <Col md={12}>
              <ReactTable
                manual // informs React Table that you'll be handling sorting and pagination server-side
                onFetchData={this.fetchData}
                data={data}
                columns={columns}
                pages={pages}
                loading={loading}
                defaultPageSize={10}
                noDataText="Not Found!"
                getTbodyProps={(state, rowInfo, column) => {
                  return {
                    style: {
                      textAlign: "center"
                    }
                  };
                }}
                getTrProps={() => {
                  return {
                    style: { alignItems: "center" }
                  };
                }}
                className="-striped -highlight"
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default MovieList;
