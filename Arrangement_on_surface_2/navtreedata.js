var NAVTREE =
[
  [ "CGAL 5.5.2 - 2D Arrangements", "index.html", [
    [ "用户手册", "index.html", [
      [ "简介", "index.html#aos_sec-intro", [
        [ "Separation of Topology and Geometry", "index.html#aos_ssec-intro-sep", null ],
        [ "Well-Behaved Curves", "index.html#aos_ssec-intro-well_behaved", null ],
        [ "Outline", "index.html#aos_ssec-intro-outline", null ]
      ] ],
      [ "Basic Arrangements", "index.html#aos_sec-basic", [
        [ "Representation of Arrangements: The Dcel", "index.html#aos_ssec-basic-dcel", null ],
        [ "The Arrangement Class Template", "index.html#aos_ssec-basic-arr_class", null ],
        [ "Traversing the Arrangement", "index.html#arr_ssectraverse", [
          [ "Traversal Methods for an Arrangement Vertex", "index.html#arr_sssectr_vertex", null ],
          [ "Traversal Methods for an Arrangement Halfedge", "index.html#arr_sssectr_halfedge", null ],
          [ "Traversal Methods for an Arrangement Face", "index.html#arr_sssectr_face", null ]
        ] ],
        [ "Modifying the Arrangement", "index.html#arr_ssecmodify", null ],
        [ "Inserting Pairwise Disjoint x-Monotone Curves", "index.html#arr_sssecmf_insert_cv", null ],
        [ "Manipulating Isolated Vertices", "index.html#arr_sssecmf_iso_verts", null ],
        [ "Manipulating Halfedges", "index.html#arr_sssecmf_halfedges", null ],
        [ "Advanced Insertion Functions", "index.html#arr_sssecadv_insert", null ]
      ] ],
      [ "Issuing Queries on an Arrangement", "index.html#arr_secqueries", [
        [ "Point-Location Queries", "index.html#arr_ssecpl", null ],
        [ "Choosing a Point-Location Strategy", "index.html#aos_sssec-pl_strategy", null ],
        [ "Vertical Ray Shooting", "index.html#arr_ssecray_shoot", null ],
        [ "Batched Point-Location", "index.html#arr_ssecbatched_pl", null ]
      ] ],
      [ "Free Functions", "index.html#arr_secgl_funcs", [
        [ "The Zone Construction Algorithm", "index.html#arr_ssec_zone", [
          [ "Inserting Pairwise Disjoint Curves", "index.html#arr_sssecinsert_non_x", null ],
          [ "Inserting X-monotone Curves", "index.html#arr_sssecinsert_x_mon", null ],
          [ "Inserting General Curves", "index.html#aos_ssec-insert_gen", null ],
          [ "Inserting Points", "index.html#arr_sssecinsert_point", null ],
          [ "Inserting Intersecting Line Segments (code example)", "index.html#arr_sssecinsert_ex", null ]
        ] ],
        [ "Other Zone Related Functions", "index.html#arr_ssseczone", null ],
        [ "The Surface-Sweep Algorithm", "index.html#arr_ssec_sweep", null ],
        [ "Removing Vertices and Edges", "index.html#arr_ssecgl_remove", null ],
        [ "Vertical Decomposition", "index.html#arr_ssec_decompose", null ]
      ] ],
      [ "Arrangements of Unbounded Curves", "index.html#aos_sec-unbounded", [
        [ "Representing Arrangements of Unbounded Curves", "index.html#aos_ssec-unbounded-rep", [
          [ "Basic Manipulation and Traversal Methods", "index.html#arr_sssecunb_basic", null ],
          [ "Free Functions", "index.html#arr_sssec-unb_global", null ]
        ] ],
        [ "Point-Line Duality", "index.html#arr_ssec-unb_duality", null ]
      ] ],
      [ "Arrangements on Curved Surfaces", "index.html#aos_sec-curved_surfaces", [
        [ "Parametric Surfaces", "index.html#aos_ssec-curved_surfaces-parameteric", null ],
        [ "The Arrangement on Surface Class Template", "index.html#aos_ssec-curved_surfaces-aos_class", null ],
        [ "Basic Manipulation and Traversal Methods", "index.html#aos_ssec-curved_surfaces-basic", null ]
      ] ],
      [ "The Geometry Traits", "index.html#aos_sec-geom_traits", [
        [ "The Hierarchy of the Geometry Traits Concepts", "index.html#aos_ssec-geom_traits-concepts", [
          [ "The Basic Concept", "index.html#aos_sssec-geom_traits-concepts_basic", null ],
          [ "Intersections", "index.html#aos_sssec-geom_traits-concepts_intersecting", null ],
          [ "Supporting Arbitrary Curves", "index.html#aos_sssec-geom_traits-concepts_arbitrary", null ],
          [ "The Landmark Concept", "index.html#aos_sssec-tr_landmarks_concept", null ],
          [ "The Construct Curve Concept", "index.html#aos_sssec-tr_additional_concepts", null ],
          [ "Supporting Unbounded Curves or Curved Surfaces", "index.html#aos_ssec-traits-curved", null ]
        ] ],
        [ "Models of the Geometry Traits Concepts", "index.html#aos_ssec-geom_traits-models", [
          [ "Traits Classes for Line Segments and Linear Objects", "index.html#arr_ssectr_segs", [
            [ "The Caching Segment-Traits Class", "index.html#arr_sssectr_caching_segs", null ],
            [ "The Non-Caching Segment-Traits Class", "index.html#arr_sssectr_non_caching_segs", null ],
            [ "The Linear-Traits Class", "index.html#arr_sssectr_linear", null ]
          ] ],
          [ "The Polyline and Polycurve Traits Classes", "index.html#arr_ssectr_polylines", [
            [ "The Polyline Traits Class", "index.html#arr_sssectr_polylines", null ],
            [ "The Polycurve Traits Class", "index.html#arr_sssectr_polycurves", null ]
          ] ],
          [ "Traits Classes for Algebraic Curves", "index.html#arr_ssectr_algebraic", [
            [ "Circular Arcs and Line Segments", "index.html#arr_sssectr_circ_seg", null ],
            [ "A Traits Class for Conic Arcs", "index.html#arr_sssectr_conic", null ],
            [ "A Traits Class for Arcs of Rational Functions", "index.html#arr_sssectr_ratfunc", null ],
            [ "A Traits Class for Planar Bézier Curves", "index.html#arr_sssectr_bez", null ],
            [ "A Traits Class for Planar Algebraic Curves of Arbitrary Degree", "index.html#arr_sssectr_alg", null ]
          ] ],
          [ "Arcs of Great Circles Embedded in the Sphere", "index.html#arr_ssectr_spherical", null ]
        ] ],
        [ "Traits-Class Decorators", "index.html#arr_ssecmeta_tr", null ]
      ] ],
      [ "The Topology Traits", "index.html#aos_sec-topol_traits", null ],
      [ "Extending the Arrangement", "index.html#arr_sec_extending", [
        [ "The Notification Mechanism", "index.html#arr_ssecnotif", null ],
        [ "Extending the DCEL", "index.html#arr_ssecex_dcel", [
          [ "Extending the DCEL Faces", "index.html#arr_sssecex_dcel_face", null ],
          [ "Extending All DCEL Records", "index.html#arr_sssecex_dcel_all", null ]
        ] ],
        [ "Overlaying Arrangements", "index.html#arr_ssecoverlay", null ],
        [ "Storing the Curve History", "index.html#arr_ssecarr_with_hist", [
          [ "Traversing an Arrangement with History", "index.html#arr_sssecarrwh_traverse", null ],
          [ "Modifying an Arrangement with History", "index.html#arr_sssecmodif_traverse", null ]
        ] ]
      ] ],
      [ "Input/Output Streams", "index.html#aos_sec-io", [
        [ "Input/Output Stream", "index.html#aos_ssec-io-stream", null ],
        [ "Arrangements with Auxiliary Data", "index.html#arr_ssecarr_io_aux_data", null ],
        [ "Arrangements with Curve History", "index.html#arr_ssecarr_io_hist", null ]
      ] ],
      [ "Adapting to Boost Graphs", "index.html#aos_sec-bgl", [
        [ "The Primal Arrangement Representation", "index.html#arr_ssecbgl_primal", null ],
        [ "The Dual Arrangement Representation", "index.html#arr_ssecbgl_dual", null ]
      ] ],
      [ "How To Speed Up Your Computation", "index.html#aos_sec-tips", null ],
      [ "设计与实现历史", "index.html#aos_sec-design", null ]
    ] ],
    [ "参考手册", "modules.html", "modules" ],
    [ "Refinement Relationships", "refines.html", null ],
    [ "Deprecated List", "deprecated.html", null ],
    [ "Is Model Relationships", "models.html", null ],
    [ "Has Model Relationships", "hasModels.html", null ],
    [ "参考文献", "citelist.html", null ],
    [ "类和Concept列表", "annotated.html", "annotated" ],
    [ "示例", "examples.html", "examples" ]
  ] ]
];

var NAVTREEINDEX =
[
"Arrangement_on_surface_2_2Bezier_curves_8cpp-example.html",
"classArrangementDcelFace.html#ab8b0a0e7774d150e529483c5d63ce71b",
"classArrangementTopologyTraits.html#a8f00a048d9d3127cdbf624d953eb9ab3",
"classCGAL_1_1Arr__conic__traits__2_1_1X__monotone__curve__2.html#a49dc78a872cb9ae5dc8cded2ea118db4",
"classCGAL_1_1Arr__polycurve__traits__2.html#ad3c005d48d2c4397ef7ec1deb24bddfb",
"classCGAL_1_1Arr__vertex__index__map.html#acbbec3181b2ae87f07431b4e803b0b76",
"group__PkgArrangementOnSurface2ConceptsFunctionObjects.html"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';