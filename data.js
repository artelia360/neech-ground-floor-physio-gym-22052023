var APP_DATA = {
  "scenes": [
    {
      "id": "0-corridor",
      "name": "Corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.5641265920817826,
        "pitch": 0.06859196426382574,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": -1.6449940079553382,
          "pitch": 0.2307294364237542,
          "rotation": 0,
          "target": "1-physio-gym-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-physio-gym-1",
      "name": "Physio Gym 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.9188719288927718,
        "pitch": 0.08166802292949349,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": -0.39541885452291226,
          "pitch": 0.09642691289850092,
          "rotation": 0,
          "target": "2-physio-gym-2"
        },
        {
          "yaw": -1.8930877224385618,
          "pitch": 0.1258819900220285,
          "rotation": 0,
          "target": "0-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-physio-gym-2",
      "name": "Physio Gym 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.9531262543953449,
        "pitch": 0.18567975028786954,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": -1.1645465120804523,
          "pitch": 0.11511972140647586,
          "rotation": 0,
          "target": "1-physio-gym-1"
        },
        {
          "yaw": 0.46433359478350766,
          "pitch": 0.17358214796577442,
          "rotation": 0,
          "target": "3-physio-store"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-physio-store",
      "name": "Physio Store",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 2.826469308457403,
        "pitch": 0.052705593228745684,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": -1.3452293082407127,
          "pitch": 0.24158343673628302,
          "rotation": 0,
          "target": "2-physio-gym-2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "NEECH Ground Floor Physio Gym 22.05.2023",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
