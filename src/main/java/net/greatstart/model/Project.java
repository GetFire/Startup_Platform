package net.greatstart.model;

import lombok.Data;

import javax.persistence.CascadeType;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.List;

@Data
@Entity
@Table(name = "projects")
public class Project extends AbstractModel {

    @Embedded
    private ProjectDescription desc;

    @ManyToOne(fetch = FetchType.EAGER)
    private User owner;

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "project")
    private List<Investment> investments;

    @ManyToOne(cascade = CascadeType.ALL)
    private Category category;
}
