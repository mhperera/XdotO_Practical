import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Wrapper from '../Wrapper/Wrapper';
import classes from './Filters.module.scss';
import Form from 'react-bootstrap/Form';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import FilterModal from '../FilterModal/FilterModal';

const Filters = ({onFilter, filterKey, sortKey, searchKey}) => {

    const [showFilterModal, setShowFilterModal] = useState(false);

    const handleKeys = (filterKey_, sortKey_) => {
        onFilter(filterKey_, sortKey_, searchKey);
    }

    const handleSerchKeyChange = (event) => {
        onFilter(filterKey, sortKey, event.target.value);
    }

    return (
        <div className={classes['filters']}>

            <Wrapper>

                <Row>

                    <Col
                        xs={{ span: 12, offset: 0 }}
                        sm={{ span: 12, offset: 0 }}
                        md={{ span: 6, offset: 6 }}
                        lg={{ span: 4, offset: 8 }}
                        xl={{ span: 3, offset: 9 }}
                        className={classes['column']}
                    >
                        <Form.Group controlId="formBasicSearch" style={{ width: '100%' }}>
                            <Form.Control 
                                type="search" 
                                placeholder="Search By Title" 
                                size="sm" 
                                value={searchKey} 
                                onChange={handleSerchKeyChange}
                            />
                        </Form.Group>

                        <FilterAltOutlinedIcon onClick={ ()=> {setShowFilterModal(true)} } className='text-body-tertiary' />

                        <FilterModal 
                            show={showFilterModal} 
                            onHide={handleKeys} 
                            defaultSortKey={sortKey} 
                            defaultFilterKey={filterKey}/>

                    </Col>

                </Row>

            </Wrapper>

        </div >
    )
}

export default React.memo(Filters)
