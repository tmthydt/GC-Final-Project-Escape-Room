import { Component, OnInit, HostListener } from "@angular/core";
import { Router } from "@angular/router";
import { GameProgressionService } from "../game-progression.service";
import { InventoryService } from "../inventory.service";

@Component({
  selector: "room-navigation",
  templateUrl: "./room-navigation.component.html",
  styleUrls: ["./room-navigation.component.css"]
})
export class RoomNavigationComponent implements OnInit {
  // hostlistener decorator declares a DOM event to listen for
  // in this case we are listening for window keydown specifically arrow keys
  // when those event are made, the functions are called
  @HostListener("window:keydown", ["$event"]) arrowLeftEvent(
    event: KeyboardEvent
  ) {
    if (event.key === "ArrowLeft" || event.key === "a") {
      this.navigateLeft();
    }
    if (event.key === "ArrowUp" || event.key === "w") {
      this.navigateFront();
    }
    if (event.key === "ArrowRight" || event.key === "d") {
      this.navigateRight();
    }
    if (event.key === "ArrowDown" || event.key === "s") {
      console.log("Don't turn back now! You have to get out");
    }
  }

  gameProgress: any;
  // navigateDirection: any;
  constructor(
    public router: Router,
    public gameProgressionService: GameProgressionService,
    public inventoryService: InventoryService
  ) {
    console.log(this.gameProgressionService.gameProgress);
  }

  ngOnInit() {
    this.gameProgress = this.gameProgressionService.getGameProgress();
  }

  getGameProgress(): string {
    this.gameProgress = this.gameProgressionService.getGameProgress();
    return this.gameProgress;
  }

  navigateLeft(): void {
    this.getGameProgress();
    this.gameProgressionService.navigateDirection = "left";
    if (this.gameProgress === "Tutorial") {
      this.router.navigate(["/tutorialleft"]);
    } else if (this.gameProgress === "Room 1") {
      this.router.navigate(["/room1left"]);
    } else if (this.gameProgress === "Room 2") {
      this.router.navigate(["/room2left"]);
    } else if (this.gameProgress === "Room 3") {
      this.router.navigate(["/room3left"]);
    }
  }

  navigateFront(): void {
    this.getGameProgress();
    this.gameProgressionService.navigateDirection = "front";
    if (this.gameProgress === "Tutorial") {
      this.router.navigate(["/tutorialfront"]);
    } else if (this.gameProgress === "Room 1") {
      this.router.navigate(["/room1front"]);
    } else if (this.gameProgress === "Room 2") {
      this.router.navigate(["/room2front"]);
    } else if (this.gameProgress === "Room 3") {
      this.router.navigate(["/room3front"]);
    }
  }

  navigateRight(): void {
    this.getGameProgress();
    this.gameProgressionService.navigateDirection = "right";
    if (this.gameProgress === "Tutorial") {
      this.router.navigate(["/tutorialright"]);
    } else if (this.gameProgress === "Room 1") {
      this.router.navigate(["/room1right"]);
    } else if (this.gameProgress === "Room 2") {
      this.router.navigate(["/room2right"]);
    } else if (this.gameProgress === "Room 3") {
      this.router.navigate(["/room3right"]);
    }
  }
}
