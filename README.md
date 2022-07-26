# Karate-To-Gatling-To-Grafana

This is a sample project showcasing how a simple API test can be written in Karate for functional automation which can then be re-used to do performance testing by passing tests into Gatling.

The results from gatling are then pushed to Influxdb with Graphite protocol which is then visualised in a Grafana dashboard.

Command to run Karate Tests: ```mvn clean test```

The html functional test report generated by karate can be found at ```target/surefire-report/``` directory

Command to run the Gatling performance tests: ```mvn clean test-compile gatling:test ```

The html performance test report generated by gatling can be found at ```results/uploadsimulation-*/``` directory

### Preparing Grafana-InfluxDb stack

The monitoring stack can be brought up using the docker compose file present inside the ``Docker-Grafana-InfluxDb`` folder.

Individual configurations of Grafana, Influxdb and Graphite protocol are already set in the respective configuration file inside this folder.

The Gatling config to push data with Graphite protocol to the monitoring container is set in the ``gatling.conf`` file under `src/test/resources` folder

The following command ```docker-compose up -d --build``` can be used to bring up the stack with in the ``Docker-Grafana-InfluxDb`` directory.

Grafana can be reached at `http://localhost:3000’`

### References

- https://intuit.github.io/karate/
- https://github.com/ptrthomas/karate-gatling-demo
- https://www.blazemeter.com/blog/gatling-tests-monitoring-with-grafana-and-influxdb/
- https://www.blazemeter.com/blog/how-to-create-a-lightweight-performance-monitoring-solution-with-docker-grafana-and-influxdb/?utm_source=blog&utm_medium=BM_blog&utm_campaign=gatling-tests-monitoring-with-grafana-and-influxdb
