<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MovieSuper - Streaming HD</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="bioskop_style.css">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  <script src="bioskop_script.js"></script>
</head>
<body>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container">
      <a class="navbar-brand" href="index.html">MovieSuper</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item"><a class="nav-link active" href="#">Top Rated Movies</a></li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">More</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Coming Soon</a></li>
              <li><a class="dropdown-item" href="#">Genres</a></li>
            </ul>
          </li>
          <li class="nav-item"><a class="nav-link" href="#">Top Rated TV Show</a></li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">More</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">New Releases</a></li>
              <li><a class="dropdown-item" href="#">Categories</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex me-2">
          <input class="form-control me-2" type="search" placeholder="Search Movie/TV">
          <button class="btn btn-light" type="submit">🔍</button>
        </form>
        <button class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#loginModal">LOGIN / REGISTER</button>
      </div>
    </div>
  </nav>
