var ScoreCollection = Backbone.Collection.extend({
    model: HoleModel,
    url: '/api/v1/holes',
    initialize: function(models, props) {
        
    }
    // initialize: function(models, props) {
    //     for( var i=0; i<props.numHoles; i++ ) {

    //         var roundId = window.roundModel.get('id');
    //         var hole    = new HoleModel();

    //         this.add(hole);
    //         hole.save({ 
    //             round_id: roundId,
    //             hole_index: i+1
    //         }, {
    //             success: function(model, response, options) {
    //                 model.set({id: response});
    //             }
    //         });

    //     }
    // }
});

module.exports = ScoreCollection;