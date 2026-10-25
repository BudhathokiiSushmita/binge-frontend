import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { getContentsById } from '../../../service/ContentService';

const Details = () => {

  // url data
  const param = useParams();
  const [content, setContent] = useState("");

  const fetchContentById = async () => {
    const data= await getContentsById(param.id);
    setContent(data.body[0]);
  }

  useEffect(() => {
    fetchContentById();
  }, [])

  return (
    <div>
      <br></br>
      <section class="section" id="individual">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 col-md-5 col-12">
              <div class="row">
                <div class="col-3">
                  <div class="left-content justify-content-right">
                    <div class="row">
                      <div class="col-6">
                        <div class="first-image">
                          <img src={content.smallPoster} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-9">
                  <div class="right-content">
                    <h2>{content.title}</h2>
                    <div className='row binge-detail-button'>
                      <div className='col-12'>
                        <Button variant="outline-primary" className='me-2' aria-pressed="true">Fiction</Button>
                        <Button variant="outline-success" className='me-2'>1hr 50min</Button>
                        <Button variant="outline-warning" className='me-2'>Blockbuster</Button>
                        <Button variant="outline-info">2024</Button>
                      </div>
                    </div>
                    <span>{content.synopsis}</span>
                    <br></br>
                    <div className='row d-flex justify-content-center'>
                      <div className='col-12 binge-cash-button'>
                        <Button variant="outline-dark" className='me-2'>{`Rent@${content.rentPrice}`}</Button>
                        <Button variant="outline-dark">{`Buy@${content.purchasePrice}`}</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-7 col-md-7 col-12">
              <div class="row">
                <div class="col-6">
                  <img src={content.largePoster} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Details
