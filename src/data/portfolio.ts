export function asset(path: string) {
  const base = import.meta.env.BASE_URL;
  return `${base}${path.startsWith('/') ? path.slice(1) : path}`;
}

export const images = {
  profile: 'images/profile.jpg',
  researchGallery: [
    { src: 'images/research/lab-setup.jpg', alt: 'SmartNet Laboratory setup', caption: 'SmartNet Laboratory' },
    { src: 'images/research/lab-gallery-2.jpg', alt: 'Research laboratory', caption: 'Research Laboratory' },
  ],
  researchMultiUav: {
    src: 'images/research/multi-uav.jpg',
    alt: 'Multi-UAV coordination',
    caption: 'Multi-UAV Coordination',
  },
  researchWibotics: {
    src: 'images/research/wibotics.jpg',
    alt: 'WiBotic wireless charging',
    caption: 'WiBotic Wireless Charging',
  },
  researchSymposium: {
    src: 'images/research/symposium.jpg',
    alt: 'Summer Research Symposium 2025',
    caption: 'Research Symposium 2025',
  },
  coast: {
    src: 'images/coast-internship.jpg',
    alt: 'COAST Autonomous internship',
    caption: 'COAST Autonomous — Summer 2025',
  },
  mlGallery: [
    { src: 'images/ml/ml-project-1.jpg', alt: 'ML / AI project showcase 1', caption: 'ML Project 1' },
    { src: 'images/ml/ml-project-2.jpg', alt: 'ML / AI project showcase 2', caption: 'ML Project 2' },
    { src: 'images/ml/ml-project-3.jpg', alt: 'ML / AI project showcase 3', caption: 'ML Project 3' },
  ],
};

export const researchGalleryVideos = [
  {
    label: 'X500 Multi-UAV Decentralized Target Searching via WiFi on Arduino Gigaboard',
    url: 'https://www.youtube.com/watch?v=CUouxV7OW28&list=PLRIFRDJnoqf7bopuOvNTWz7w327Io5QXf&index=2',
  },
];

export const researchMultiUavVideo = {
  label: 'Multi-UAV Target Search via Shared ROS Telemetry (NimBro) using Fly4Future drones',
  url: 'https://www.youtube.com/watch?v=eLfoDcs_18o',
};

export const contact = {
  name: 'Siddhartha Geddam',
  email: 'sidatstates@gmail.com',
  github: 'https://github.com/siddu7g',
  university: 'University of North Carolina at Charlotte',
  degree: 'B.S. Electrical and Computer Engineering',
  concentration: 'Machine Learning',
  years: '2022 – 2026',
  location: 'San Francisco, CA',
  tagline: 'LIVE. LEARN. GIVE.',
};

export const about = `Full-stack AI and Robotics Engineer specializing in AI/ML systems and sensor-driven technologies, with a strong foundation in UAVs, autonomous vehicles, and intelligent automation. My work blends AI perception, embedded systems, and real-time computing, enabling seamless integration of intelligence across devices and platforms, from edge AI and IoT networks to full-scale autonomous systems.

Through research on decentralized wireless communication in UAVs and real-time system deployment, I've developed a deep understanding of how distributed intelligence powers modern autonomy. My hands-on experience spans firmware development, embedded hardware, and AI-driven control & autonomy pipelines, utilizing Arduino, Raspberry Pi, and NVIDIA Jetson devices. My industry exposure in deep learning, perception, and Reinforcement Learning has strengthened my ability to build scalable AI solutions.`;

export const projectHighlight = {
  name: 'Synthera World',
  label: 'AI-Native Cloud · Physical AI',
  github: 'https://github.com/siddu7g/Synthera-World',
  parts: [
    {
      title: 'Isaac Sim Agentic Studio',
      description:
        'Synthera World is an AI-native cloud developer workflow for the physical AI era. Configure humanoid and AMR robots, describe simulation tasks in natural language, and generate validated NVIDIA Isaac Sim Python scripts through an LLM-backed FastAPI pipeline with live SSE log streaming. Built with React, Zustand, OpenRouter, local RAG, and a five-layer script validator, it removes robotics simulation boilerplate while keeping runs grounded in real Isaac assets and host GPU execution.',
    },
    {
      title: 'Vision Labeling & Fine-Tuning Pipeline',
      description:
        'A full-stack FastAPI and React application that sits between raw robot camera data and LoRA fine-tuning. The backend stores labeled frames in SQLite or PostgreSQL, runs async vision-model inference, and supports task domains like hotel service and indoor navigation. Each frame is analyzed into structured reasoning: Completed, Current state, Next action, and Risk, so labels stay consistent and training-ready. For navigation tasks, a multi-agent orchestrator (Sensing → Planning → Execution → Governance) uses keyword RAG to enrich that analysis. The frontend provides drag-and-drop upload, model selection, editable labels, and an approve/reject workflow. One-click export produces LLaMA-Factory-ready datasets with images and structured assistant responses, ready for LoRA fine-tuning on AWS EC2 G5 GPUs.',
    },
  ],
  tags: [
    'NVIDIA Isaac Sim',
    'FastAPI',
    'React',
    'OpenRouter',
    'RAG',
    'AWS EC2 G5',
    'LoRA',
    'LLaMA-Factory',
    'PostgreSQL',
    'Multi-Agent',
    'Docker',
  ],
  gallery: [
    { src: 'images/synthera/synthera-1.jpg', alt: 'Synthera World platform screenshot 1' },
    { src: 'images/synthera/synthera-2.jpg', alt: 'Synthera World platform screenshot 2' },
  ],
};

export const seniorAchievements = [
  {
    title: 'Zerve.ai Hackathon Winner',
    subtitle: 'Data Analytics Platform for AI Workflows',
    description:
      'Led large-scale user retention analysis by ingesting and transforming raw behavioral datasets using robust data engineering pipelines. Applied cohort analysis, event-level feature engineering, and churn labeling to build predictive models (Logistic Regression for interpretability and LSTM for sequential behavior modeling). This drove a projected 20% uplift in Crash & Burn user retention while remaining scalable within system and business constraints.',
    tags: ['Data Analytics', 'Cohort Analysis', 'LSTM', 'Logistic Regression', 'Hackathon'],
    image: 'images/endowments/zerve-hackathon.jpg',
    imageAlt: 'Zerve.ai hackathon project',
  },
  {
    title: 'RL-Driven Trajectory Optimization & Obstacle Avoidance',
    subtitle: 'NVIDIA Isaac Sim',
    description:
      'Deep reinforcement learning–based UAV navigation system integrated with PX4 Offboard Control using NVIDIA Isaac Sim, where a PPO-trained policy learns continuous micro-waypoint commands for goal-directed flight. The policy is optimized through a reward function that emphasizes monotonic distance reduction and goal completion, enabling stable convergence and reliable deterministic inference with obstacle avoidance (forklift). Foundation for extensions to obstacle-aware and dynamic environments.',
    tags: ['PX4', 'ROS2', 'PPO', 'PyTorch', 'NVIDIA Isaac Sim', 'Path Planning'],
    image: 'images/endowments/isaac-rl-trajectory.jpg',
    imageAlt: 'RL trajectory optimization in Isaac Sim',
  },
  {
    title: "Bird's-Eye View Semantic Mapping & Cosmos-R2 VLA",
    subtitle: 'IsaacSim-Pegasus Simulator Extension',
    description:
      "Built a BEV semantic mapping pipeline in Isaac Sim: monocular camera sweeps reconstructed into top-down occupancy and semantic maps using camera intrinsics and Replicator ground truth.\n\nDeployed NVIDIA Cosmos-R2 as a VLA policy in Docker on IsaacSim-Pegasus, interpreting field of view and spatial context into flight actions via Hugging Face.",
    highlights: [
      'Synchronized frame fusion: indexed captures join distance_to_camera.npy, semantic_segmentation.png, and meta/frame.json per frame ID',
      'Monocular rays → ground projection using camera matrix K and stride-sampled unit rays',
      'Semantic BEV + occupancy rasterized into a 0.15 m/cell grid with two-class floor vs. object maps',
    ],
    tags: [
      'BEV',
      'Semantic Mapping',
      'Cosmos-R2',
      'Hugging Face',
      'VLA',
      'Docker',
      'Qwen',
    ],
    image: 'images/endowments/bev-cosmos-vla.jpg',
    imageAlt: 'BEV semantic mapping and Cosmos-R2 VLA',
  },
];

export const researchMentor = {
  name: 'Dr. Ran Zhang',
  email: 'rzhang8@charlotte.edu',
  lab: 'SmartNet Laboratory',
  location: 'EPIC 2378, UNC Charlotte',
};

export const researchOverview = {
  title: 'Distributed Multi-UAV Platform with On-Board Intelligence',
  intro: `UAVs can be remotely controlled or independently guided by onboard computers. Centralized host architectures create a single point of failure and high compute burden. This research distributes control across a drone network with independent decision-making and collaboration — drones gather local sensor data and communicate to determine actions.

WiFi on Arduino Gigaboard R1 + Pixhawk 6C flight controller eliminates ground control station dependency, enabling embedded self-navigation and on-board intelligence.`,
  sections: [
    {
      title: 'Autonomous Drone Flight',
      content:
        'Holybro X500 V4 frame, 1700 KV BLDC motors, 14 V 8000 mAh LiPo. Autonomous flight via Pixhawk 6C guided mode + MAVLink with waypoint navigation, mission execution, and real-time adjustments. Modes include position hold, altitude hold, and return to launch.',
    },
    {
      title: 'Motion and Path Planning Algorithms',
      content:
        'Gigaboard sends MAVLink heartbeat messages via buffer list. Grid survey mapping and SET POINT navigation. Pixy2 camera on Gigaboard R1 for object identification with intelligence algorithms — Pixy2 processes images independently when detecting blocks.',
    },
    {
      title: 'Wireless Communication via Arduino Gigaboard',
      content:
        'Giga R1 boards form a direct local network without internet. UDP via custom GigaComms library (async + sync). MAVLink integration for battery voltage, altitude, GPS, and waypoint control. Pixy2 + Giga R1 for autonomous visual navigation.',
    },
    {
      title: 'Multi-UAV Coordinated Target Search',
      content:
        'Multi-robot coordination in ROS: path planning, target search, and real-time collaboration. Obstacle-aware target search with decentralized communication sharing live position, odometry, and sensor data. Gazebo + RViz simulation and visualization. Custom fine-tuned YOLOv12 for real-time recognition and tracking. Multi-Robot Task Allocation (MRTA).',
      github: 'https://github.com/siddu7g/Multi_UAV_Coordination',
    },
  ],
};

export const researchProjects = [
  {
    title: 'Fly4Future Multi-agent DQ-RL Distributed Networks',
    subtitle: 'Multi-Robot UAV System (MRS) Localization',
    description:
      'Deep-RL policy with 3-layer neural network (1024 → 512 → 64) and state-action pair reward mechanism covering 23 of 25 target points.',
    highlights: [
      'Trained DQN/PPO agents for dynamic obstacle avoidance — 88% episode success rate in Gazebo',
      'Inter-agent comm protocols (ROS topics/services) for cooperative decision-making and dynamic allocation',
      'YOLOv12 vision-driven policies via camera service node — 0.93 recall',
      'Deployed on FLY4FUTURE research drones for real-time flight testing (MRS UAV System)',
      'Distribution of target points in 4×4 grid with shared ROS Nodes/Topics',
    ],
    tags: ['Fly4Future', 'DQN', 'PPO', 'Deep RL', 'ROS', 'Gazebo', 'YOLOv12', 'Swarm Robotics'],
    github: 'https://github.com/siddu7g/Multi_UAV_Coordination',
  },
  {
    title: 'UAV Wireless Charging — WiBotic',
    subtitle: 'Autonomous Docking & Power Electronics',
    description:
      'UAV landing and wireless charging system built around WiBotic wireless power infrastructure with ground-side transmitter pads, onboard receiver modules, and DC–DC converter integrated into a docking-ready airframe.',
    highlights: [
      'HEXFET N-channel MOSFET solid-state switch via Arduino Giga + gate driver',
      'Isolates BLDC motors from PDB during charging to prevent back-feeding',
      'MAVLink-triggered landing with voltage-threshold descent',
      'Vision-based fine alignment using Pixy2 camera and custom C++ ArUco pose estimation',
    ],
    tags: ['WiBotic', 'Wireless Charging', 'Arduino Giga', 'MAVLink', 'ArUco', 'Power Electronics'],
    github: 'https://github.com/siddu7g/ArduinoGigaR1-Wibotics-MOSFET-Switch',
  },
];

export const coastInternship = {
  company: 'COAST Autonomous',
  role: 'AI/ML Robotics Engineering Intern',
  period: 'May – August 2025',
  description:
    'Summer internship focused on training, optimizing, and deploying deep learning perception models on autonomous vehicle platforms with ROS, multi-camera pipelines, and NVIDIA Jetson Orin edge deployment.',
  responsibilities: [
    'Trained, optimized, and integrated various deep learning models, including YOLO architectures (v4, v12) for object detection and PointPillars for 3D point cloud object detection',
    'Experienced in training and integrating semantic segmentation models, utilizing architectures such as ResNet50, DeepLabV3, and FPN',
    'Hands-on experience working with camera hardware including Sony ILX-LR1, e-con, and ZED2 stereo vision systems — configuring camera drivers and calibrating intrinsic/extrinsic parameters',
    'Developed ROS nodes in C++ to interface with cameras, handling image acquisition, synchronization, and publishing sensor data via RTMAPS pipeline',
    'Gained hands-on experience with NVIDIA Jetson Orin platforms (JetPack SDK, TensorRT, CUDA) and automating model launches on autonomous vehicles',
  ],
  tags: ['Linux', 'YOLO', 'PointPillars', 'Semantic Segmentation', 'Camera & LiDAR', 'ROS', 'C++', 'Jetson Orin', 'TensorRT', 'CUDA'],
};

export const mlProjects = [
  {
    title: 'Custom YOLOv12 Object Detection Model',
    description:
      'Trained and integrated YOLO v4 and v12 architectures for real-time object detection as part of autonomous vehicle perception stacks. Integrated into ROS pipelines with 0.93 recall in multi-UAV target search applications.',
    tags: ['YOLOv12', 'Object Detection', 'ROS', 'Computer Vision'],
    github: 'https://github.com/siddu7g/Isaac-Sim-ML',
  },
  {
    title: 'ResNet50/FPN Semantic Segmentation',
    description:
      'Trained and integrated semantic segmentation models utilizing ResNet50, DeepLabV3, and FPN architectures. Deployed on NVIDIA Jetson Orin with TensorRT and CUDA optimization for real-time inference on autonomous vehicles.',
    tags: ['ResNet50', 'FPN', 'DeepLabV3', 'Semantic Segmentation', 'TensorRT'],
  },
  {
    title: '3D Point Cloud Object Detection — PointPillars',
    description:
      'Trained and integrated PointPillars for 3D point cloud object detection as part of the autonomous vehicle perception stack, enabling LiDAR-based spatial understanding for navigation and obstacle detection.',
    tags: ['PointPillars', '3D Detection', 'Point Cloud', 'LiDAR'],
  },
  {
    title: 'Optical Character Recognition LLM',
    description:
      'License plate character extraction using YOLOv8-EasyOCR with feature parameter tuning — combining object detection and OCR for robust character recognition in real-world automotive scenarios.',
    tags: ['OCR', 'YOLOv8', 'EasyOCR', 'License Plate Recognition'],
    github: 'https://github.com/siddu7g/License-Plate-Reader-OCR',
  },
  {
    title: 'Birds-Eye-View Transformers (BEVfusion)',
    description:
      'Senior design coursework on Cooperative BEV Transformers, advancing toward BEV-aware multi-agent localization and cooperative navigation through shared spatial context. Part of Isaac Sim ML research trajectory.',
    tags: ['BEV', 'BEVFusion', 'Transformers', 'Multi-Agent', '3D Perception'],
    github: 'https://github.com/siddu7g/Isaac-Sim-ML',
  },
];

export const roboticsProjectHighlight = {
  name: 'GPS-Independent Precision Landing for Autonomous UAVs',
  label: 'Vision-Guided Landing · Embedded UAV',
  description:
    "This project implements a closed-loop, vision-guided precision landing system for ArduCopter-based UAVs that eliminates dependence on GPS during the terminal landing phase. The architecture pairs a Pixy2 camera, configured to track a red ground fiducial, with an Arduino Giga R1 acting as the onboard companion computer, which communicates bidirectionally with a Pixhawk 6C flight controller over MAVLink (Serial1 via TELEM2 at 57600 baud). Rather than relying on simultaneous orientation correction and descent, the system uses a stepwise DETECT → CORRECT → DESCEND state machine: once the drone is manually flown into position and switched into GUIDED mode, the Giga continuously ingests ATTITUDE and global position MAVLink streams to compute body-frame-to-NED corrections based on the marker's pixel offset from center, issuing incremental roll/pitch/yaw setpoint commands to recenter the pad before advancing descent altitude in controlled steps.",
  tags: ['Pixy2', 'Arduino Giga', 'Pixhawk', 'MAVLink', 'Computer Vision', 'Precision Landing', 'Embedded Systems'],
  gallery: [
    { src: 'images/robotics/precision-landing-1.jpg', alt: 'Precision drone landing system setup' },
    { src: 'images/robotics/precision-landing-2.jpg', alt: 'Pixy2 guided landing in flight' },
  ],
};

export const roboticsProjects = [
  {
    title: 'DIY Electric Scooter',
    description:
      'Hands-on electric scooter build with Queen City Scooters, Uptown Charlotte. Completed circuit examination, testing, and assembly in three days with sponsored chassis and shop expertise.',
    highlights: [
      '36V Controller/Converter with 350W BLDC Hub Motor',
      '36V Lithium ion battery, disc brake, Hall sensors, accelerator throttle',
      'PCB dashboard, 3-port inline charging vent, custom chassis frame',
    ],
    tags: ['BLDC Motor', 'Li-ion Battery', 'Fabrication', 'Embedded Hardware'],
    image: 'images/robotics/electric-scooter.jpg',
    imageAlt: 'DIY electric scooter build',
  },
  {
    title: 'UAV Simulation in Gazebo (YOLOv4)',
    description:
      'Gazebo simulation on Ubuntu via WSL2 with ArduPilot SITL for multi-UAV systems. Custom world models, catkin_ws ROS packages, concurrent UAV control, swarming, and collision avoidance.',
    highlights: [
      'ROS + Gazebo ArduPilot plugin for flight dynamics',
      'YOLO (CNN) for real-time object detection via grid-based classification',
      'LiDAR plugin for object position as matrix vector',
    ],
    tags: ['Gazebo', 'ArduPilot SITL', 'ROS', 'YOLOv4', 'LiDAR', 'Multi-UAV'],
    image: 'images/robotics/gazebo-yolov4.jpg',
    imageAlt: 'UAV simulation in Gazebo with YOLOv4',
  },
  {
    title: 'Ardupilot-MAVLink SITL',
    description:
      'Autonomous path planning with Mission Planner, PyMavlink, and Mavproxy. GPS lat/long to meters conversion algorithm enabling meter-based distances and custom orientations without GPS waypoints.',
    highlights: [
      'Mission Planner pre-planned waypoint paths for physical UAVs',
      'Testing and refinement of autonomous flight algorithms',
      'Applications in construction and plantation agriculture',
    ],
    tags: ['ArduPilot', 'MAVLink', 'SITL', 'Mission Planner', 'Path Planning'],
    image: 'images/robotics/ardupilot-sitl.jpg',
    imageAlt: 'ArduPilot MAVLink SITL path planning',
  },
  {
    title: 'AirSim and OpenCV Integration',
    description:
      'Real-time UAV environment monitoring with OpenCV and AirSim interface. Python in Visual Studio processing real-time UAV video streams in Unreal Engine with OpenCV and Matplotlib visualization.',
    highlights: [
      'OpenCV + AirSim camera plugin integration',
      'Foundation for real-time machine learning on computer vision databases',
    ],
    tags: ['AirSim', 'OpenCV', 'Unreal Engine', 'Python', 'Computer Vision'],
    image: 'images/robotics/airsim-opencv.jpg',
    imageAlt: 'AirSim and OpenCV integration',
  },
];
