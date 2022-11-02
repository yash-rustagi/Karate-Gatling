package users

import com.intuit.karate.gatling.PreDef._
import io.gatling.core.Predef._
import io.gatling.core.structure.ScenarioBuilder

import scala.concurrent.duration._
import scala.language.postfixOps

class UsersSimulation extends Simulation {

//  val protocol = karateProtocol(
//    "/users" -> Nil,
//    "/users/id" -> Nil
//  )

  val userCount = System.getProperty("USER_COUNT").toInt
  println(userCount)

  val GetUsers: ScenarioBuilder = scenario(name = "Get users").exec(karateFeature(name = "classpath:users/users.feature"))

  setUp(
    GetUsers.inject(rampUsers(userCount) during (5 seconds))
  )

}