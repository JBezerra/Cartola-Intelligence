import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";
// react plugin used to create charts
import { Line, Pie, HorizontalBar, Scatter, Bubble, Bar } from "react-chartjs-2";



// function that returns a color based on an interval of numbers

import Stats from "components/Stats/Stats.jsx";

import {
  distribuicaoDePatrocinadores,
  patrocinadoresFaixaEtaria,
  distribuicaoPorRegiao,
  distribuicaoPorGenero,
  GloboFaixaEtaria,
  GloboPorRegiao,
  GloboPorGenero
} from "variables/charts.jsx";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="content">
        <Row>
          <Col xs={12}>
            <Card>
              <CardHeader>
                <CardTitle>O anunciante mais relevante entre internautas é SporTV</CardTitle>
                <p className="card-category">O Mais Relevante</p>
              </CardHeader>
              <CardBody>


                <Bar
                  data={distribuicaoDePatrocinadores.data}
                  options={distribuicaoDePatrocinadores.options}
                  height={60}
                />


              </CardBody>
              <CardFooter>
                <hr />
                <Stats>
                  {[
                    {
                      i: "fas fa-history",
                      t: " Updated 3 minutes ago"
                    }
                  ]}
                </Stats>
              </CardFooter>
            </Card>
          </Col>

         


        </Row> 
        <Row>

        <Col xs={6}>
            <Card>
              <CardHeader>
                <CardTitle>Usuários SporTV pela Faixa Etária</CardTitle>
                <p className="card-category">Usuários divididos pela Faixa Etária</p>
              </CardHeader>
              <CardBody>


                <Line
                  data={patrocinadoresFaixaEtaria.data}
                  options={patrocinadoresFaixaEtaria.options}
                  width={400}
                  height={100}
                />


              </CardBody>
              <CardFooter>
                <hr />
                <Stats>
                  {[
                    {
                      i: "fas fa-history",
                      t: " Updated 3 minutes ago"
                    }
                  ]}
                </Stats>
              </CardFooter>
            </Card>
          </Col>

          <Col xs={6}>
            <Card>
              <CardHeader>
                <CardTitle>Globo pela Faixa Etária</CardTitle>
                <p className="card-category">Usuários divididos pela Faixa Etária</p>
              </CardHeader>
              <CardBody>


                <Line
                  data={GloboFaixaEtaria.data}
                  options={GloboFaixaEtaria.options}
                  width={400}
                  height={100}
                />


              </CardBody>
              <CardFooter>
                <hr />
                <Stats>
                  {[
                    {
                      i: "fas fa-history",
                      t: " Updated 3 minutes ago"
                    }
                  ]}
                </Stats>
              </CardFooter>
            </Card>
          </Col>

        </Row>


        <Row>
          <Col xs={6}>
            <Card>
              <CardHeader>
                <CardTitle>Relevância do SporTV por Região</CardTitle>
                <p className="card-category"></p>
              </CardHeader>
              <CardBody>


                <Bar
                  data={distribuicaoPorRegiao.data}
                  options={distribuicaoPorRegiao.options}
                />


              </CardBody>
              <CardFooter>
                <hr />
                <Stats>
                  {[
                    {
                      i: "fas fa-history",
                      t: " Updated 3 minutes ago"
                    }
                  ]}
                </Stats>
              </CardFooter>
            </Card>
          </Col>

          <Col xs={6}>
            <Card>
              <CardHeader>
                <CardTitle>Relevância da Globo por Região</CardTitle>
                <p className="card-category"></p>
              </CardHeader>
              <CardBody>


                <Bar
                  data={GloboPorRegiao.data}
                  options={GloboPorRegiao.options}
                />


              </CardBody>
              <CardFooter>
                <hr />
                <Stats>
                  {[
                    {
                      i: "fas fa-history",
                      t: " Updated 3 minutes ago"
                    }
                  ]}
                </Stats>
              </CardFooter>
            </Card>
          </Col>


        </Row> 


        <Row>
          <Col xs={6}>
            <Card>
              <CardHeader>
                <CardTitle>Relevância do SportTV por Gênero</CardTitle>
                <p className="card-category"></p>
              </CardHeader>
              <CardBody>


                <Bar
                  data={distribuicaoPorGenero.data}
                  options={distribuicaoPorGenero.options}
                />


              </CardBody>
              <CardFooter>
                <hr />
                <Stats>
                  {[
                    {
                      i: "fas fa-history",
                      t: " Updated 3 minutes ago"
                    }
                  ]}
                </Stats>
              </CardFooter>
            </Card>
          </Col>

          <Col xs={6}>
            <Card>
              <CardHeader>
                <CardTitle>Relevância da Globo por Gênero</CardTitle>
                <p className="card-category"></p>
              </CardHeader>
              <CardBody>


                <Bar
                  data={GloboPorGenero.data}
                  options={GloboPorGenero.options}
                />


              </CardBody>
              <CardFooter>
                <hr />
                <Stats>
                  {[
                    {
                      i: "fas fa-history",
                      t: " Updated 3 minutes ago"
                    }
                  ]}
                </Stats>
              </CardFooter>
            </Card>
          </Col>


        </Row> 
      </div>
    );
  }
}

export default Dashboard;
