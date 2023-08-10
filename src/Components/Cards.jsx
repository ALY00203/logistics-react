import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
function GroupExample() {
  return (
    <div className='container'>
    <CardGroup>
      <Card className='card-1 cardMain'>
        <Card.Body>
          <h3 className='text-white d-flex align-items-end h-100 fw-bold'>Marin Transport Logistics</h3>
        </Card.Body>
        <Card.Footer>
          <Button as={Link} to={'/MarinTransport'}  className="text-white bg-transparent w-100 fw-bold BtnCard">See More</Button>
        </Card.Footer>
      </Card >

      <Card className='card-2 cardMain'>
        <Card.Body>
        <h3 className='text-white d-flex align-items-end h-100 fw-bold'>Land Transport Logistics</h3>
        </Card.Body>
        <Card.Footer >
        <Button as={Link} to={'/MarinTransport'}  className="text-white bg-transparent w-100 fw-bold BtnCard">See More</Button>
        </Card.Footer>
      </Card>

      <Card className='card-3 cardMain'>
        <Card.Body>
        <h3 className='text-white d-flex align-items-end h-100 fw-bold'>Rail Transport Logistics</h3>
        </Card.Body>
        <Card.Footer>
        <Button as={Link} to={'/MarinTransport'}  className="text-white bg-transparent w-100 fw-bold BtnCard">See More</Button>
        </Card.Footer>
      </Card>
    </CardGroup>
    </div>
  );
}

export default GroupExample;