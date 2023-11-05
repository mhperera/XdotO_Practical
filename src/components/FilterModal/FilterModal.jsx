import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import classes from './FilterModal.module.scss';

const FilterModal = ({ show, onHide, defaultSortKey ,defaultFilterKey }) => {

  const [sortKey, setSortKey] = useState(defaultSortKey);
  const [filterKey, setFilterKey] = useState(defaultFilterKey);

  return (
    <Modal
      show={show}
      onHide={onHide}
      backdrop="static"
      keyboard={false}
      size={"lg"}
      centered
      className={classes['filter-modal']}
    >
      <Modal.Body>

        <Container>

          <Row className="mb-4">
            <Modal.Title><h5>Filter Results</h5></Modal.Title>
          </Row>

          <Row className="mb-4">
            <Col xs={12} md={4} className='fw-medium'>
              Filter By Type
            </Col>
            <Col xs={12} md={8}>

              { 
              
                ['all', 'movie', 'series'].map(filterBy=>(
                  <Form.Check
                    inline
                    name="filter-options"
                    type='radio'
                    key={filterBy}
                    id={filterBy}
                    label={filterBy.charAt(0).toUpperCase() + filterBy.slice(1)}
                    onChange={()=>{ setFilterKey(filterBy) }}
                    defaultChecked = {filterKey===filterBy}
                  />
                ))
              
              }

            </Col>
          </Row>

          <Row className="mb-4">
            <Col xs={12} md={4} className='fw-medium'>
              Sort By
            </Col>
            <Col xs={12} md={8}>

              {

                ['none', 'latest', 'oldest', 'higher ratings', 'lower ratings'].map(sortBy=>(
                  <Form.Check
                    name="sort-options"
                    type='radio'
                    key={sortBy}
                    id={sortBy}
                    label={sortBy.charAt(0).toUpperCase() + sortBy.slice(1)}
                    onChange={()=>{ setSortKey(sortBy) }}
                    defaultChecked = {sortKey===sortBy}
                  />
                ))

              }

            </Col>
          </Row>

          <Row className="mb-1">
            <Button size="sm" variant="primary" onClick={()=>onHide(filterKey, sortKey)} >Filter</Button>
          </Row>

        </Container>

      </Modal.Body>

    </Modal>
  )
}

export default FilterModal;